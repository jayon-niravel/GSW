<?php
include_once('db.php');
include_once('verify.php');
$header = apache_request_headers();

$data = json_decode(file_get_contents('php://input'), true);
$phone=$data['phone'];
$Email_ID = $data['email'];

function generatePIN($digits)
{
    $i = 0; 
    $pin = "";    
 while($i < $digits)
 {      
    $pin .= mt_rand(0, 9);   
    $i++;
 }
    
   return $pin;
}
$pin = generatePIN(6);

if(isset($phone) && isset($Email_ID)){
    $result = mysql_query("SELECT Email_ID,CID,Password  FROM Customer WHERE Email_ID = '".$Email_ID."'");
    $row = mysql_fetch_row($result);

    if ($result && mysql_num_rows($result) > 0){

        $sql = ("UPDATE Customer SET Phone = '".$phone."', OTP = '".$pin."' WHERE CID= '".$row[1]."'");
           $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
            if( $res > 0 )
           {  
                verify($phone,$pin);
                  $response = array("message"=>"Mobile Number Updated"+$res);
                  echo json_encode($response);  

           }

    }else{
        //header("HTTP/1.0 401 Not Found");
      $response = array("error"=>"Error Updating data");
        echo json_encode($response);
    }

}else{
        //header("HTTP/1.0 401 Not Found");
        $response = array("error"=>"No data found");
        echo json_encode($response);
}

?>