<?php
include('db.php');
$header = apache_request_headers();
$data = json_decode(file_get_contents('php://input'), true);
$response = array();

$cid= $data['CID'];
  $selectSQL = 'SELECT b.*,v.*,t.* FROM Bookings_Development b ,Vehicles v ,Transaction_Development t  where CID='.$cid.' and b.V_ID=v.V_ID  and b.Book_ID=t.Book_ID';
 
 if( !( $selectRes = mysql_query( $selectSQL ) ) )
 {
    
  }
  else
  {
   if(isset($cid) )
   {
   if( mysql_num_rows( $selectRes )==0 )
   {
        //echo '<tr><td colspan="4">No Rows Returned</td></tr>';
      }
      else
      {
        while( $row= mysql_fetch_assoc( $selectRes ) )
       
        {
       
      
         
      $response[]=
      array("transId"=>$row['MojoID'],"amount"=>$row['Amount'],"from"=>$row['From_date'],"to"=>$row['To_date'],"location"=>$row['Location'],"bikes"=>$row['Vname'],"status"=>"canCancel");
    
//status field will contain 3 values against each transaction id:- cancelled,completed,canCancel    

   }
   }
   }
}

//echo $response;
header('Content-Type: application/json');
echo json_encode($response);
//echo $data;



?>