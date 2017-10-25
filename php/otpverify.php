<?php
include_once('db.php');
include_once('verify.php');
$header = apache_request_headers();

$data = json_decode(file_get_contents('php://input'), true);
$otp=$data['OTP'];
$cid=$data['CID'];
$verify="yes";

if(isset($otp))
{
       $result = mysql_query("SELECT OTP  FROM Customer WHERE CID= '".$cid."'");
       $row = mysql_fetch_row($result);
        
     
     	if ($result && mysql_num_rows($result) > 0)
    	{
            //echo "checking OTP verify";
            if($otp == $row[0])
            {
               $sql = ("UPDATE Customer SET verification='yes' WHERE CID= '".$cid."'");
	       $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
	        if( $res > 0 )
	       {  
                  $response = array("message"=>"Successfully OTP verified "+$res);
                  echo $response;  

	       }
	        else{
	         //echo "FAILED TO RECORD";
	          $response = array("message"=>"Error:FAILED TO RECORD");
                  echo $response; 
           }
    	   }else{
          header("HTTP/1.0 401 Not Found");
        echo $response = array("message"=>"failure");
         }


                                                                                            
        }
        else
        {	
            
            	
    		header("HTTP/1.0 401 Not Found");
    		echo $response = array("message"=>"failure");
                
                
        }
}
else
{
                header("HTTP/1.0 401 Not Found");//OTP is not available
    		echo $response = array("message"=>"failure"); 
}



//$response = array("user"=>"ABC");
//header('Content-Type: application/json');
//echo json_encode($response);
//echo $data;

?>