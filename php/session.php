<?php
session_start();
$header = apache_request_headers();
$data = json_decode(file_get_contents('php://input'), true);
$action = $data['action'];

if($action = "get")
{
	echo $_SESSION[$data['key']];
         

}
else if($action = "set")
{
	$_SESSION[$data['key']] = json_encode($data['value']);
         $_SESSION['testing'] = "tetsing";
        echo "set";
         
}
else if($action = "remove")
{
	unset($_SESSION[$data['key']]);
	echo "removed";
}
else if($action = "destroy")
{
 session_destroy();
}

//$_SESSION['Login'] = "set";

//header('Content-Type: application/json');
//echo json_encode($response);

?>