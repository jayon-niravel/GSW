<?php
session_start();
date_default_timezone_set('Asia/Kolkata');
include 'instamojo.php';
include_once('db.php');
$header = apache_request_headers();

$data = json_decode(file_get_contents('php://input'), true);
//echo $data;

$CID=$data['CID'];
$V_Data=$data['V_Data'];
$from=$data['from'];
$location=$data['location'];
$to=$data['to'];  
//$Daily_rate=$data['V_Data'][0]['Daily_rate'];
//$Hourly_rate=$data['V_Data'][0]['Hourly_rate'];
$Location=$data['V_Data'][0]['Location'];
$V_ID=$data['V_Data'][0]['V_ID'];
$Vname=$data['V_Data'][0]['Vname'];
$quantity=$data['V_Data'][0]['quantity'];
$Cname="";$Email_ID="";$Phone="";
//Date conversion
        $from1 = split ("\ ", $from);$d=$from1[0];$t=$from1[1];
        $string = str_replace("-","", $d);$string1 = str_replace(":", "", $t);
	$fromD=$string;$fromT=$string1;
	$from=$fromD.$fromT;$to1=split("\ ",$to);
        $d2=$to1[0];$t2=$to1[1];$string2= str_replace("-","", $d2);
	$string3 = str_replace(":", "", $t2);$toD=$string2;
	$toT=$string3;$to=$toD.$toT;

//get customer info
if(isset($CID))
      {
        $result = mysql_query("SELECT Cname,Email_ID,Phone FROM Customer WHERE CID = '".$CID."'");
     	$row = mysql_fetch_row($result);
     	if ($result && mysql_num_rows($result) > 0)
    	{
           $Cname=$row[0];
           $Email_ID=$row[1];
           $Phone=$row[2];
           

        }
      }
else
{
   header("HTTP/1.0 401 Not Found");
    $response = array("message"=>"failure-NO CID");
   echo json_encode($response);

}	      
if(!isset($Email_ID) OR !isset($Phone))
{
    header("HTTP/1.0 401 Not Found");
    $response = array("message"=>"failure-NO Phone or EMail ID in DB");
    echo json_encode($response);
}   
    
    
//rates calculation             

$i = 0; $j = 0;$total=0;
//echo $data['V_Data'][0]['V_ID'];
$check=$data['V_Data'][$i]['V_ID'];

while(!empty($check)) {
 //echo $check;     
    $V_ID=$data['V_Data'][$i]['V_ID'];
    $quantity=$data['V_Data'][$i]['quantity'];
     if(isset($V_ID))
      {
        $result = mysql_query("SELECT Daily_rate,Hourly_rate,Amt_Admin FROM Vehicles WHERE V_ID = '".$V_ID."'");
     	$row = mysql_fetch_row($result);
     	if ($result && mysql_num_rows($result) > 0)
    	{
           $Daily_rate=$row[0];
           $Hourly_rate=$row[1];
           $Amt_Admin=$row[2];

        }
      }	 

       if($fromD == $toD )
        {  
            //$in1 = (int)$string1;$in2 = (int)$string3;
            //$in1=$in1/100;$in2=$in2/100;
            //$num=$in2-$in1;
            $amount=$Daily_rate*$quantity;
           // $discount=0.10*$amount;
           // $amount=$amount-$discount;
            $Admin_amount=$Amt_Admin*$quantity;
            //echo $amount;
             
             
        }
        else if($fromD < $toD)
        {
          $t1 = StrToTime ( $from );
          $t2 = StrToTime ( $to );
          $diff = $t2 - $t1;
          $hours = $diff / (3600);
          $hours =ceil($hours/24);
          //$num=$num+1;
          $amount=$hours*$Daily_rate*$quantity;
         // $discount=0.10*$amount;
         // $amount=$amount-$discount;
          $Admin_amount=$hours*$Amt_Admin*$quantity;
          //echo $amount."  ";
  
       }
$total=$total+$amount;

$_SESSION['details'][$i]=array ("location" => $data['V_Data'][$i]['Location'],"V_ID" => $data['V_Data'][$i]['V_ID'],"From_date" => $string,"To_date" => $string2,"From_time" => $string1,"To_time" => $string3,"quantity" => $quantity,"Vamount" => $amount,"Admin_amount" => $Admin_amount);
//echo $data['V_Data'][$i]['Location'];
$i++;
$check=$data['V_Data'][$i]['V_ID'];
} 
//Print_r ($_SESSION);
//echo $total;
$_SESSION['total']=$total;
$_SESSION['CID']=$CID;


$api = new Instamojo\Instamojo('58e62e4b74f092029866c23188df1464','2edbc5b6e788b663e61ee1f4261aeeed', 'https://www.instamojo.com/api/1.1/');

try {
    $response = $api->paymentRequestCreate(array(
        'purpose' => 'GETSETWHEELS PAYMENT',
    'amount' => $total,
    'phone' => $Phone,
    'buyer_name' => $Cname,
    'redirect_url' => 'http://www.getsetwheels.com/php/final.php/',
    'send_email' => true,
    'webhook' => 'http://www.getsetwheels.com/php/database.php/',
    'send_sms' => true,
    'email' => $Email_ID,
    'allow_repeated_payments' => false
        ));
    //print_r($response);
    
  $pay_url = $response['longurl'];
 //header("Location: $pay_url");
 //exit();
//echo $pay_url;
  $url = array("url" => $pay_url);
  echo json_encode($url);



}
catch (Exception $e) {
    print('Error: ' . $e->getMessage());
}

?>