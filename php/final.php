<?php
session_start();
include_once('sms.php');
include 'instamojo.php';
include 'db.php';
//print_r($_SESSION);
//$i=0;
//echo $_SESSION['details'][$i]['From_date'];
$Cvehicles= "  ";
settype($Camount, "integer");
$f ="";$t=""; $Cloc="";$Gadmin="";
//echo $_SESSION['details'][0]['V_ID'];
$api = new Instamojo\Instamojo('58e62e4b74f092029866c23188df1464','2edbc5b6e788b663e61ee1f4261aeeed', 'https://www.instamojo.com/api/1.1/');

$payid =$_GET["payment_request_id"];
$available = true;

try {
  $response = $api->paymentRequestStatus($payid);
        // print_r($response);
       //  echo  $response['id']; echo "   ";
       //  echo  $response['payments'][0]['payment_id'];
 $status= $response['status'];
 $total=  $response['amount'];
 $id= $response['id'];
 $payid = $response['payments'][0]['payment_id'];
 $time= $response['created_at'];
	//echo "PAYMENT=>";
	//echo  $response['payments'][0]['payment_id'];
        //echo '<pre>';
        //print_r($response);
        //echo '</pre>';
        //header("Location: http://www.getsetwheels.com/GetSetWheels/gsw/");
        //header("Location: http://www.google.com/");
        //if($response['status']=='Completed')
       // header("Location: http://www.getsetwheels.com/GetSetWheels/gsw/#/confirmation");
       // else
       //    header("Location: http://www.getsetwheels.com/GetSetWheels/gsw/#/error");
      // $value="Completed";
  if($response['status']=="Completed")
  {
    //echo "inside if-response</br>";
    $i=0;

    if (isset($_SESSION['details'][$i]['location']))

    {
      //echo "inside if-session</br>";


      $sql12=mysql_query("INSERT into test(status) values('verified')");

      $temp=$_SESSION['details'][$i]['From_date'].$_SESSION['details'][$i]['From_time'];   

      $from= mysql_real_escape_string($temp);

      $temp=$_SESSION['details'][$i]['To_date'].$_SESSION['details'][$i]['To_time'];

      $to= mysql_real_escape_string($temp);

      $cid=$_SESSION['CID'];


      $check=$_SESSION['details'][$i]['V_ID'];

      while(!empty($check))

      {
       //echo "inside while-check".$check; echo "</br>";

       $j=0;

       $quantity=$_SESSION['details'][$i]['quantity'];

       $temp=$_SESSION['details'][$i]['V_ID'];

       $varray=(explode(',',$temp));

       //echo $varray[0];

       $vid= mysql_real_escape_string($varray[$j]);  

       while(!empty($vid) && ($j<$quantity) )

       {
         //echo "inside while-vid and quantity".$quantity." ".$j; echo " </br>";

         $sql = mysql_query
         ("SELECT s.V_ID,Vname,From_date,To_date FROM Vehicles v,Status s  
          WHERE ('".$to."' >= From_date AND '".$from."' <= To_date)
          AND s.V_ID = '".$vid."' AND v.V_ID = '".$vid."' ");


         $row = mysql_fetch_array($sql);


         if($row[0])

         { 
          
          $mesg='Sorry,the vehicle has already been booked from '.$row[From_date]. ' to ' .$row[To_date];

          $result= array("message"=>$mesg);
          $available = false;


        }

        else

        {

         $location=$_SESSION['details'][$i]['location'];

         mysql_query("start transaction;");
         $amount = $_SESSION['details'][$i]['Vamount'];
         $Admin_amount = $_SESSION['details'][$i]['Admin_amount'];
         $amount=$amount/$quantity;
         //echo $amount;
         $sql = "INSERT INTO Bookings(V_ID,CID,From_date,To_date,Location,Amount) VALUES    
         ('$vid','$cid','$from','$to','$location','$amount')";


         $sql2 = "INSERT INTO Status(V_ID,From_date,To_date,Book_ID) VALUES    
         ('$vid','$from','$to',LAST_INSERT_ID())";


         $res = mysql_query($sql);
         $res2 = mysql_query($sql2);
        //get max ID 
         $resM = mysql_query("SELECT MAX(Book_ID) FROM Bookings");
         $rowM = mysql_fetch_row($resM);
         $last=$rowM[0];
         //echo $last;
         //Get ADmin ID
         $resA = mysql_query("SELECT Admin_ID,Vname  FROM Vehicles WHERE V_ID = '".$vid."' ");
         $rowA = mysql_fetch_row($resA);
         $admin=$rowA[0];$Gadmin=$admin;
         $Vname=$rowA[1];
         //echo $admin;

         
         $sqlT = "INSERT INTO Transaction(PayID,MojoID,Time_created,status,Book_ID,Amount,Admin_ID) VALUES    
         ('$id','$payid','$time','$status','$last','$amount','$admin')";
         $resT = mysql_query($sqlT);
         //echo  $resT;
        
         //SMS INTEGRATION HERE FOR SUCCESS--------------------------------------
         $resA = mysql_query("select Aname,Phone from admin where Admin_ID = '".$admin."' ");
         $rowA = mysql_fetch_row($resA);
         $Aname=$rowA[0]; $phone=$rowA[1];
         //$phone = "8793610729";
         //Customer info for admin
         $resA = mysql_query("select Cname,Phone from Customer where CID = '".$cid."' ");
         $rowA = mysql_fetch_row($resA);
         $Cname=$rowA[0]; 
         $Cphone=$rowA[1];


         $hi="Hi "; $c= ",   "; 
$mesg= "Booking and payment has been done for below vehicle.Contact us if any enquires-8793610729                   ";
         $cust= "  Customer name = ".$Cname."  and Customer Phone = ".$Cphone;
             $str = $from;
             $str=substr_replace($str,"/",4,0);
             $str=substr_replace($str,"/",7,0);
             $str=substr_replace($str,"  ",10,0);
             $str=substr_replace($str,":",14,0);

             $str1 = $to;
             $str1=substr_replace($str1,"/",4,0);
             $str1=substr_replace($str1,"/",7,0);
             $str1=substr_replace($str1,"  ",10,0);
             $str1=substr_replace($str1,":",14,0);

         $f="  From Date = ".$str;
         $t="  To Date = ".$str1;
         $v="  Vehicle name = ".$Vname;
         $Cvehicles=$Cvehicles."  ".$Vname." , ";
         $l="  Pickup location =".$location;
         $Cloc =$Cloc."  ".$location." , "; 
         $a="  Amount= ".$Admin_amount;
         $Camount=$Camount+$amount;
         $thanks=" Thank you-GSW";
         $pin= $hi.$Aname.$c.$mesg.$f.$t.$v.$l.$a.$cust.$thanks;
         verify($phone,$pin);

         if( $res > 0 && $res2 > 0)

         {
          //echo "SUCCESSFULLY RECORDED";

          mysql_query("commit;");

          $result= array("message"=>"Booking done successfully");


        }

        else

        {
            //echo "FAILED TO RECORD";

          mysql_query("rollback;");

          $result= array("message"=>"Sorry for the inconvenience,Please try again");
          $available = false;

        }



      }

      $j++;

      $vid= mysql_real_escape_string($varray[$j]);

    }

    $i++;		

    $check=$_SESSION['details'][$i]['V_ID'];

  }

// admin info for customer
         $resA = mysql_query("select Aname,Phone,document  from admin where Admin_ID = '".$Gadmin."' ");
         $rowA = mysql_fetch_row($resA);
         $Aname=$rowA[0]; 
         $Aphone=$rowA[1];
         $Document=$rowA[2];  

$admin= "  Please contact below vendor for bike pickup and drop.Vendor name = ".$Aname."  and Vendor Phone = ".$Aphone;
     //FOR CUSOTMER ALERT SMS
         $resA = mysql_query("select Cname,Phone from Customer where CID = '".$cid."' ");
         $rowA = mysql_fetch_row($resA);
         $Aname=$rowA[0]; $phone=$rowA[1];
         //$phone =$phone;
         $docs="  .Documents = ".$Document;
         $hi="Hi "; $c= ",   ";
         $mesg= "Booking and payment has been done successfully for below details.Contact us if any enquires-8793610729                    ";
         $thanks="           .Thank you-GSW";
         $Cv="  Vehicle name = ".$Cvehicles;
         $Ca="  Amount= ".$Camount;
         $l="  Pickup location =".$Cloc;
         
         $pin= $hi.$Aname.$c.$mesg.$f.$t.$Cv.$l.$Ca.$admin.$docs.$thanks;
         //$pin = $Aname.$phone.$Camount.$Cvehicles.$f.$t;
         verify($phone,$pin);

//FOR ADMIN PURPOSE ONLY-----------------------------
        $phone="9004813284";
        $phone1="9049085152";
        //$pin = "BOOKINGS HAS BEEN DONE-PLEASE CHECK NOW-LIVe";
         verify($phone,$pin);
         verify($phone1,$pin);
}
}
else

{
  //echo "failed";
  $available = false;

}


}


catch (Exception $e) {
  //print('Error: ' . $e->getMessage());
  $available = false;

}

if($available == true){
  header("Location: http://www.getsetwheels.com/#/confirmation?transactionId=".$response['payments'][0]['payment_id']);

}else{
      $sqlT = "INSERT INTO Transaction(PayID,MojoID,Time_created,status,Book_ID,Amount,Admin_ID) VALUES    
         ('$id','$payid','$time','$status','Not Available','$amount','Not Available')";
  $resT = mysql_query($sqlT);
  header("Location: http://www.getsetwheels.com/#/error");
}


?>