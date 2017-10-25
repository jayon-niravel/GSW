<?php   
      session_start();
      include_once('db.php');
      	
 	 if(isset($_GET['from']) && isset($_GET['to']) && isset($_GET['vid']) && isset($_SESSION['admin']))
{
        
          $admin=$_SESSION['admin'];
	  $from= mysql_real_escape_string( $_GET["from"] );
	  $to= mysql_real_escape_string( $_GET["to"] );
          $vid= mysql_real_escape_string( $_GET["vid"] );
          //$to= $data['to'];
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
("SELECT V_ID,Vname FROM Vehicles WHERE V_ID NOT IN (SELECT V_ID FROM Status WHERE ('".$to."' >= From_date AND '".$from."' <= To_date)) AND Admin_ID ='".$admin."' ");

$sql1 = mysql_query
("SELECT s.V_ID,Vname,From_date,To_date FROM Vehicles v,Status s  WHERE (('".$to."' >= From_date AND '".$from."' <= To_date)) AND Admin_ID ='".$admin."' AND v.V_ID = s.V_ID ");       

	  if($sql)
	   { 
              
             while( $row = mysql_fetch_array($sql) )
             {
               
              $result [] =array('V_ID' => $row['V_ID'],'Vname' => $row['Vname'],'Status' => "Available",'Details' => "Not Booked");
               //$result= array("message"=>"success");
             }


             while( $row = mysql_fetch_array($sql1) )
             {
                
             $str = $row['From_date'];
             $str=substr_replace($str,"/",4,0);
             $str=substr_replace($str,"/",7,0);
             $str=substr_replace($str,"  ",10,0);
             $str=substr_replace($str,":",14,0);

             $str1 = $row['To_date'];
             $str1=substr_replace($str1,"/",4,0);
             $str1=substr_replace($str1,"/",7,0);
             $str1=substr_replace($str1,"  ",10,0);
             $str1=substr_replace($str1,":",14,0);



               $date=$str  . ' to ' . $str1 ;
              $result [] =array('V_ID' => $row['V_ID'],'Vname' => $row['Vname'],'Status' => "Booked",'Details' => $date);
               //$result= array("message"=>"success");
             }
             
	
	   }
	   else
           {
             $result= array("message"=>"1");
	     //$result= array("data1"=>"value1","data2"=>"value2");
             //$result+= array("message"=>"eureka");
             
           }



}
else
{
              $result= array("message"=>"2");
             
}
echo json_encode($result);

?>