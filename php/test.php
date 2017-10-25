<?php
include_once('db.php');

$result = mysql_query("SELECT *  FROM Maintainence_vehicles");
     	$row = mysql_fetch_row($result);
     
     echo $row[0];

?>