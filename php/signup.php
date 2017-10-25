<?php
include_once('db.php');
include_once('verify.php');
$header = apache_request_headers();

$data = json_decode(file_get_contents('php://input'), true);
$email=$data['email'];
$name=$data['name'];
$password=$data['password'];
$phone=$data['phone'];
//phone number last 4 digits
 if(is_numeric($phone))   
 {      
    $last_digits= substr($phone,6);
    //echo $last_digits;  
 }  
 else   
 {
    //echo "Not numeric"; 
 }
//OTP genration

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

//echo $pin; 
//----store in DB
        $email = stripslashes($email);
	$email = mysql_real_escape_string($email);	
     	$result = mysql_query("SELECT Email_ID,CID  FROM Customer WHERE Email_ID = '".$email."'");
     	$row = mysql_fetch_row($result);
        
       if ($result && mysql_num_rows($result) > 0)
    	{
            //echo "EMAIL ID ALREADY EXISTS IN DATABASE";
             header("HTTP/1.0 401 Not Found");
    		$response = array("message"=>"failure");
            //$response = array("message"=>"EMAIL ID ALREADY EXISTS IN DATABASE",                                                                                                   
                             // "Email_ID"=>$row[0],"CID"=>$row[1],"user"=>"old");
    	}
	else if(isset($email) && isset($name) && isset($password) && isset($phone) && isset($pin))
   	    {
    	    $sql = "INSERT INTO Customer (Cname ,Email_ID ,Phone,Password,OTP) VALUES    
            ('$name','$email','$phone','$password','$pin')";
	    $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
	      if( $res > 0 )
	      {  //echo "SUCCESSFULLY RECORDED";
	       $response = array("message"=>"SUCCESSFULLY RECORDED", "Email_ID"=>$email,"CID"=>mysql_insert_id()
                               ,"Cname"=>$name,"Phone"=>$phone,"digits"=>$last_digits,"user"=>"new");
               verify($phone,$pin);
	      }
	      else
	         //echo "FAILED TO RECORD";
	          $response = array("message"=>"Error:FAILED TO RECORD");
    	    }

//$response = array("user"=>"ABC");
header('Content-Type: application/json');
echo json_encode($response);
//echo $data;

?>