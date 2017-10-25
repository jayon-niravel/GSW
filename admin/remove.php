<?php   
      session_start();
      include_once('db.php');
      	
 	 if(isset($_SESSION['admin']))
{
        
          $admin=$_SESSION['admin'];
          $data= mysql_real_escape_string( $_GET["vid"] );
          $from=substr($data,0,12);
          $vid=substr($data,12,16);
	 $sql = mysql_query
("SELECT Book_ID from Status
where `V_ID` = '".$vid."'
and `From_date` = '".$from."' ");     
       
 $row = mysql_fetch_array($sql);

	  if($row[0])
	   { 
               
              $bookid=$row[0];
              $sql = mysql_query
("Delete from Status
where `V_ID` = '".$vid."'
and `From_date` = '".$from."' "); 


$sql = mysql_query
("Delete from Bookings
where `Book_ID` = '".$bookid."' ");    

$result= array("message"=>"success");

           }
	   else
           {
               

                   $result= array("message"=>"1");
        

             
           }



}
else
{
              $result= array("message"=>"2");
             
}
echo json_encode($result);

?>