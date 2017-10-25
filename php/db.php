<?php
$dbhost = "localhost";
$dbuser = "jayon2705";
$dbpass = "jayon2705";
$dberror1 = "could not connect to database";


$conn=mysql_connect($dbhost,$dbuser,$dbpass) or die ($dberror1);
//$conn = mysql_connect("localhost", "root");
$select_db=mysql_select_db('jayon') or die ($dberror1);

?>