<?php
session_start();
session_destroy();
include_once('db.php');
$header = apache_request_headers();
$data = json_decode(file_get_contents('php://input'), true);

$from= $data['from'];
$to= $data['to'];
$location= $data['location'];
$from =str_replace("-","",$from);
$from =str_replace(":","",$from);
$from =str_replace(" ","",$from);
$to =str_replace("-","",$to);
$to =str_replace(":","",$to);
$to =str_replace(" ","",$to);
$response = array();

if(isset($from) && isset($to))
{ 
   if(isset($location))
   {
   $result = mysql_query
("SELECT GROUP_CONCAT( V_ID )AS V_ID,Vname,Description,Mileage,Hourly_rate,Daily_rate,Location,img_name, 
Admin_ID, COUNT( V_ID ) AS vcount FROM Vehicles   WHERE V_ID NOT IN (SELECT V_ID FROM Status WHERE ('".$to."' >= From_date AND '".$from."' <= To_date)) and Type  = 'Bikes' and City = '".$location."'
 GROUP BY Admin_ID,Vname");
   }
   else
   {
      $result = mysql_query
("SELECT GROUP_CONCAT( V_ID )AS V_ID,Vname,Description,Mileage,Hourly_rate,Daily_rate,Location,img_name, 
Admin_ID, COUNT( V_ID ) AS vcount FROM Vehicles   WHERE V_ID NOT IN (SELECT V_ID FROM Status WHERE ('".$to."' >= From_date AND '".$from."' <= To_date)) and Type  = 'Bikes' GROUP BY Admin_ID,Vname");
   }
     //$row = mysql_fetch_row($result);   
     if( $result )
     {
             while($row = mysql_fetch_array($result, MYSQL_ASSOC))
		{
			 
 $response [] =array('V_ID' => $row['V_ID'],'Vname' => $row['Vname'],'Description' => $row['Description'],
 'Mileage' => $row['Mileage'],'Hourly_rate' => $row['Hourly_rate'],'Daily_rate' => $row['Daily_rate'],
 'Location' => $row['Location'],'img_name' => $row['img_name'],'quantity' => "0",'Admin_ID' => $row['Admin_ID'],
'vcount' => $row['vcount'],"discount"=>0);
		    
    //print_r( $response);
       
		}

             
     }
     else
     {
             $response = array("message"=>"NO DATA FOUND FOR THIS TIME PERID :O");
     }
 }  
	

    

header('Content-Type: application/json');
echo json_encode($response);
//echo $data;

?>