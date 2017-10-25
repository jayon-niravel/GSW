<?php   
      session_start();
      include_once('db.php');
      	
 	 if(isset($_GET['from']) && isset($_GET['to']) && isset($_GET['vid']) && isset($_SESSION['admin']))
{
        
          $admin=$_SESSION['admin'];
	  $from= mysql_real_escape_string( $_GET["from"] );
	  $to= mysql_real_escape_string( $_GET["to"] );
          $vid= mysql_real_escape_string( $_GET["vid"] );
          $realfrom=str_replace("T"," ",$from);$realto=str_replace("T"," ",$to);
          $from =str_replace("-","",$from);
          $from =str_replace(":","",$from);
          $from =str_replace(" ","",$from);
          $from =str_replace("T","",$from);
          $to =str_replace("-","",$to);
          $to =str_replace(":","",$to);
          $to =str_replace(" ","",$to);
          $to =str_replace("T","",$to);
          //$from =str_replace("-","",$from);
          //$to =str_replace("-","",$to);


	 $sql = mysql_query
("SELECT s.V_ID,Vname,From_date,To_date FROM Vehicles v,Status s  
WHERE ('".$to."' >= From_date AND '".$from."' <= To_date)
 AND Admin_ID ='".$admin."' AND s.V_ID = '".$vid."' AND v.V_ID = '".$vid."' ");     
       
 $row = mysql_fetch_array($sql);

	  if($row[0])
	   { 
              $mesg='Sorry,the vehicle has already been booked from '.$row[From_date]. ' to ' .$row[To_date];
              $result= array("message"=>$mesg);
	
	   }
	   else
           {
               mysql_query("start transaction;");
                $sql = "INSERT INTO Bookings(V_ID,CID,From_date,To_date,Location) VALUES    
            ('$vid','$admin','$realfrom','$realto','$admin')";

            
            $sql2 = "INSERT INTO Status(V_ID,From_date,To_date,Book_ID) VALUES    
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



}
else
{
              $result= array("message"=>"2");
             
}
echo json_encode($result);

?>