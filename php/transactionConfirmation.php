<?php
include('db.php');
$header = apache_request_headers();
$data = json_decode(file_get_contents('php://input'), true);

$cid= $data['CID'];
$payId= $data['transactionId'];
//echo $payId;
$selectSQL = "SELECT sum(t.Amount) AS Amount,b.From_date,b.To_date,t.PayID
FROM Bookings_Development b,Transaction_Development t  where MojoID='".$payId."' and b.Book_ID=t.Book_ID";
if( !( $selectRes = mysql_query( $selectSQL ) ) )
 {
    //echo array("message"=>"Data reterieval failed");
  }
  else
  {
   if(isset($payId) )
   {
   if( mysql_num_rows( $selectRes )==0 )
   {
        //echo '<tr><td colspan="4">No Rows Returned</td></tr>';
      }
      else
      {
        while( $row= mysql_fetch_assoc( $selectRes ) )
       
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
         
      $response=
     array("CID"=>$cid,"transId"=>$payId,"amount"=>$row['Amount'],"from"=> $str,"To"=>$str1);
    
    
   }
   }
   }
}

//$response = array("CID"=>$cid,"transId"=>$payId,"amount"=>"2500","location"=>"andheri","vehicle"=>"ThunderBird","TnD"=>"12:00 PM Andheri");
//header('Content-Type: application/json');
echo json_encode($response);
//echo $data;



?>