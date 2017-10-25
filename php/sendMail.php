<?php
include('db.php');
$header = apache_request_headers();
$data = json_decode(file_get_contents('php://input'), true);


$email = $data['email'];

$success = true;

if($success == true){
	header('Content-Type: application/json');
	$response = array("message"=>"Password Reset Link Successfully Sent To Your EmailId. Please Check Inbox Or Junk Folder.","email"=>$email);
	echo json_encode($response);

}else{
	header("HTTP/1.0 401 Not Found");
	
}

?>