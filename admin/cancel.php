<?php   
      session_start();
      include_once('db.php');
      	
 	 if(isset($_SESSION['admin']))
{
        
          $admin=$_SESSION['admin'];
	 $sql = mysql_query
("SELECT s.V_ID,Vname,From_date,To_date
FROM Vehicles v,Bookings s WHERE  s.Location ='".$admin."' AND s.V_ID = v.V_ID ");     
       
 //$row = mysql_fetch_array($sql);

	  if($sql)
	   { 
               while( $row = mysql_fetch_array($sql) )
             {
               $str = $row['From_date'];
               $str1 = $row['To_date'];
               $date=$str. ' to ' .$str1;

              $result [] =array('V_ID' => $row['V_ID'],'Vname' => $row['Vname'],'Status' => "Booked",'Details' => $date);
               //$result= array("message"=>"success");
             }


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