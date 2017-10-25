<?php
session_start();
include 'instamojo.php';
include 'db.php';
 $_SESSION['pstatus']="false";
/*
Basic PHP script to handle Instamojo RAP webhook.
*/

$data = $_POST;
$mac_provided = $data['mac'];  // Get the MAC from the POST data
unset($data['mac']);  // Remove the MAC key from the data.
$ver = explode('.', phpversion());
$major = (int) $ver[0];
$minor = (int) $ver[1];
if($major >= 5 and $minor >= 4){
     ksort($data, SORT_STRING | SORT_FLAG_CASE);
}
else{
     uksort($data, 'strcasecmp');
}
// You can get the 'salt' from Instamojo's developers page(make sure to log in first): https://www.instamojo.com/developers
// Pass the 'salt' without <>
$mac_calculated = hash_hmac("sha1", implode("|", $data), "4a835fa93beb48f1a6875a08d5d6899d");
if($mac_provided == $mac_calculated){
    if($data['status'] == "Credit"){
    
    
     $i=0;
        if (isset($_SESSION['details'][$i]['Location']))
 {
     
      $sql12=mysql_query("INSERT into test(status) values('verified')");   
       $temp=$_SESSION['details'][$i]['From_date'].$_SESSION['details'][$i]['From_time'];   
	  $from= mysql_real_escape_string($temp);
	  $temp=$_SESSION['details'][$i]['To_date'].$_SESSION['details'][$i]['To_time'];
	  $to= mysql_real_escape_string($temp);
	  $cid=$_SESSION['CID'];
      		
      $check=$_SESSION['details'][$i]['V_ID'];
   while(!empty($check)) 
{

       $j=0;
	  $quantity=$_SESSION['details'][$i]['quantity'];
	  $temp=$_SESSION['details'][$i]['V_ID'];
	  $varray=(explode(',',$temp));
      //echo $varray[2];
     $vid= mysql_real_escape_string($varray[$j]);   
     while(!empty($vid) && ($j<$quantity) )
   {
      
	 $sql = mysql_query
("SELECT s.V_ID,Vname,From_date,To_date FROM Vehicles v,Status_Development s  
WHERE ('".$to."' >= From_date AND '".$from."' <= To_date)
  AND s.V_ID = '".$vid."' AND v.V_ID = '".$vid."' ");     
       
 $row = mysql_fetch_array($sql);

	  if($row[0])
	   { 
              $mesg='Sorry,the vehicle has already been booked from '.$row[From_date]. ' to ' .$row[To_date];
              $result= array("message"=>$mesg);
	
	   }
	   else
           {
		      $location=$_SESSION['details'][$i]['Location'];
               mysql_query("start transaction;");
                $sql = "INSERT INTO Bookings_Development(V_ID,CID,From_date,To_date,Location) VALUES    
            ('$vid','$cid','$from','$to','$location')";

            
            $sql2 = "INSERT INTO Status_Development(V_ID,From_date,To_date,Book_ID) VALUES    
            ('$vid','$from','$to',LAST_INSERT_ID())";
              
	    $res = mysql_query($sql);
            $res2 = mysql_query($sql2);
	      if( $res > 0 && $res2 > 0)
	      {  //echo "SUCCESSFULLY RECORDED";
                  mysql_query("commit;");
	       $result= array("message"=>"Booking done successfully");
               
	      }
	      else
	      {  //echo "FAILED TO RECORD";
                  mysql_query("rollback;");
	         $result= array("message"=>"Sorry for the inconvenience,Please try again");
              }
               
             
           }

    $j++;
    $vid= mysql_real_escape_string($varray[$j]); 
    }
	  $i++;		
      $check=$_SESSION['details'][$i]['V_ID'];
 }


 }
 else
 {
      $sql12=mysql_query("INSERT into test(status) values('$_SESSION['CID']')"); 
 }


        

        //print_r($response);
        echo "Payment was successful, mark it as successful in your database.";
        // You can acess payment_request_id, purpose etc here. 
    }
    else{
           $_SESSION['pstatus']="false";
           $sql12=mysql_query("INSERT into test(status) values('payment failed')"); 
        echo "Payment was unsuccessful, mark it as failed in your database.";
        // You can acess payment_request_id, purpose etc here.
    }
}
else{
     $_SESSION['pstatus']="MAC mismatch";
    echo "MAC mismatch";
}
?>