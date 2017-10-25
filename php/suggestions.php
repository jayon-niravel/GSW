<?php
include_once('db.php');
$header = apache_request_headers();

$data = json_decode(file_get_contents('php://input'), true);
$email=$data['email'];
$cid=$data['CID'];
$name=$data['name'];
$message=$data['message'];
$registered = $data['registered'];

//echo $pin; 
if(isset($registered)){
if(isset($email) && isset($message) && isset($name))
{
    	    $sql = "INSERT INTO Suggestions(EmailId,Name,Message) VALUES    
            ('$email','$name','$message')";
	    $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
	      if( $res > 0 )
	      {  //echo "SUCCESSFULLY RECORDED";
	      
	       header('Content-Type: application/json');
	      }
	      else{
	          header("HTTP/1.0 401 Not Found");
	          }
}else{
	header("HTTP/1.0 401 Not Found");
}
}else{
if(isset($email) && isset($cid) && isset($message) && isset($name))
{
    	    $sql = "INSERT INTO Suggestions(CID,EmailId,Name,Message) VALUES    
            ('$cid','$email','$name','$message')";
	    $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
	      if( $res > 0 )
	      {  //echo "SUCCESSFULLY RECORDED";
	       header('Content-Type: application/json');
	      }
	      else{
	          header("HTTP/1.0 401 Not Found");
	          }
}else{
	header("HTTP/1.0 401 Not Found");
}
}
//$response = array("user"=>"ABC");
//header('Content-Type: application/json');
//echo json_encode($response);
//echo $data;

?>