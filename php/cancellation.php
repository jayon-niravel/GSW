<?php
include('db.php');
$header = apache_request_headers();
$data = json_decode(file_get_contents('php://input'), true);

$transId = $data['transId'];


//just pass the message whether cancelled successfully or not.

$response = array("message"=>$transId);
header('Content-Type: application/json');
echo json_encode($response);
//echo $data;



?>