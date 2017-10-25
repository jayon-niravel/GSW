<?php   
      session_start();
      include_once('db.php');
      	
 	 if(isset($_GET['name']) && isset($_GET['psw']))
{

	  $username = mysql_real_escape_string( $_GET["name"] );
	  $password = mysql_real_escape_string( $_GET["psw"] );

	  $sql = "SELECT Admin_ID,Aname FROM admin WHERE(Phone='$username' AND Password='$password')";
          $res = mysql_query($sql)or trigger_error(mysql_error().$sql);
         $row = mysql_fetch_array($res);	
          
	  if($row[0])
	   { 
              $_SESSION['Login'] = "set";
              $_SESSION['admin'] = $row[0];
              $admin=$row[0];$Aname=$row[1];
             $sql1 = mysql_query("select count(v.V_ID) AS Bdata from Vehicles v,Status b
              where v.V_ID = b.V_ID and Admin_ID = '".$admin."' ");
              $row = mysql_fetch_array($sql1);
              $Bdata=$row[0];  
             $sql2 = mysql_query("select count(*) AS Vdata from Vehicles where  Admin_ID = '".$admin."' ");
             $row = mysql_fetch_array($sql2);
               $Vdata=$row[0];
             $sql3 = mysql_query("select count(*) AS Tdata from Transaction where  Admin_ID = '".$admin."' ");
             $row = mysql_fetch_array($sql3);
               $Tdata=$row[0];
               $_SESSION["Aname"]=$Aname;
               $_SESSION["Bdata"]=$Bdata;
               $_SESSION["Vdata"]=$Vdata;
               $_SESSION["Tdata"]=$Tdata;
               $result= array("message"=>"success","Bdata"=>$Bdata,"Vdata"=>$Vdata,"Tdata"=>$Tdata,
              "Aname"=>$Aname);
	
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