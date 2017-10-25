<?php
include_once('db.php');
$header = apache_request_headers();

$data = json_decode(file_get_contents('php://input'), true);

if(!isset($data['loggingInBy'])){


  	
	$Email_ID = $data['username'];
	$password = $data['password'];
     	
     	$Email_ID = stripslashes($Email_ID);
	$Email_ID = mysql_real_escape_string($Email_ID);	
     	$result = mysql_query("SELECT Email_ID,CID,Password,Cname,Phone  FROM Customer WHERE Email_ID = '".$Email_ID."'");
     	$row = mysql_fetch_row($result);
        
     
     	if ($result && mysql_num_rows($result) > 0)
    	{
            //echo "EMAIL ID ALREADY EXISTS IN DATABASE";
            if($Email_ID == $row[0] and $password== $row[2])
            {
                $response = array("message"=>"Successfully logged In",                                                                                                   
                              "Email_ID"=>$row[0],"CID"=>$row[1],"user"=>"old","Cname"=>$row[3],"phone"=>$row[4]);
                              echo json_encode($response);
            }
            else
            {	
            
            	
    		header("HTTP/1.0 401 Not Found");
    		echo $response = array("message"=>"failure");
                
                
            }
   
            
    	}
	
    	else
    	{
    		//echo "NO DATA FETCHED TO WRITE IN DATABASE";
    		header("HTTP/1.0 401 Not Found");
    		$response = array("message"=>"Error:NO DATA FETCHED TO WRITE IN DATABASE");
    		echo json_encode($response);
    	}
}else{
	
  	$Cname = $data['name'];
	$Email_ID = $data['id'];
	$Token_ID = $data['token'];
     if(isset($Email_ID))
       {
        
     	$Email_ID = stripslashes($Email_ID);
	$Email_ID = mysql_real_escape_string($Email_ID);	
     	$result = mysql_query("SELECT Email_ID,CID,Cname,Phone  FROM Customer WHERE Email_ID = '".$Email_ID."'");
     	$row = mysql_fetch_row($result);
       }
    else if(isset($Token_ID))
      {	
     	$result = mysql_query("SELECT Email_ID,CID,Cname,Phone  FROM Customer WHERE Token_ID = '".$Token_ID."'");
     	$row = mysql_fetch_row($result);
       }

      
    
    
        
     
     	if ($result && mysql_num_rows($result) > 0)//if already exist customer
    	{
            //echo "EMAIL ID ALREADY EXISTS IN DATABASE";
            $response = array("message"=>"EMAIL ID ALREADY EXISTS IN DATABASE",                                                                                                   
                              "Email_ID"=>$row[0],"CID"=>$row[1],"user"=>"old","Cname"=>$row[2],"phone"=>$row[3]);
                              echo json_encode($response);
    	}
	else if(isset($Cname) && isset($Email_ID)&&isset($Token_ID))//if all 4 parameters are available
   	{
    	    $sql = "INSERT INTO Customer (Cname ,Email_ID ,Token_ID) VALUES ('$Cname','$Email_ID','$Token_ID')";
	    $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
	    if( $res > 0 )
	    {  //echo "SUCCESSFULLY RECORDED FOR EMAIL ID";
	     $response = array("message"=>"SUCCESSFULLY RECORDED  FOR EMAIL ID", "Email_ID"=>$Email_ID,"CID"=>mysql_insert_id()
                               ,"user"=>"new","Cname"=>$Cname,"phone"=>"");
            echo json_encode($response);
	     
	    }
	    else{
	     //echo "FAILED TO RECORD";
	     $response = array("message"=>"Error:FAILED TO RECORD");
	     header("HTTP/1.0 401 Not Found");
	     echo json_encode($response);
	     }
    	}
    	else if(isset($Cname) && isset($Email_ID))//if only email and name
    	{
    		$sql = "INSERT INTO Customer (Cname ,Email_ID) VALUES ('$Cname','$Email_ID')";
	    $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
	    if( $res > 0 )
	    {  //echo "SUCCESSFULLY RECORDED FOR TOKEN ID";
	     $response = array("message"=>"SUCCESSFULLY RECORDED  FOR TOKEN ID", "Email_ID"=>$Email_ID,"CID"=>mysql_insert_id()
                               ,"user"=>"new","Cname"=>$Cname,"phone"=>"");
	     echo json_encode($response);
	    }
	    else
	     //echo "FAILED TO RECORD";
	     $response = array("message"=>"Error:FAILED TO RECORD");
	     header("HTTP/1.0 401 Not Found");
	     echo json_encode($response);
    	}
        else if(isset($Cname) && isset($Token_ID))//if only name and token
    	{
    		$sql = "INSERT INTO Customer (Cname ,Token_ID) VALUES ('$Cname','$Token_ID')";
	    $res = mysql_query($sql) or trigger_error(mysql_error().$sql);
	    if( $res > 0 )
	    {  //echo "SUCCESSFULLY RECORDED FOR TOKEN ID";
	     $response = array("message"=>"SUCCESSFULLY RECORDED  FOR TOKEN ID", "Email_ID"=>$Email_ID,"CID"=>mysql_insert_id()
                               ,"user"=>"new","Cname"=>$Cname,"phone"=>"");
                               echo json_encode($response);
	     
	    }
	    else
	     //echo "FAILED TO RECORD";
	     $response = array("message"=>"Error:FAILED TO RECORD");
	     header("HTTP/1.0 401 Not Found");
	     echo json_encode($response);
    	}
        else
    	{
    		//echo "NO DATA FETCHED TO WRITE IN DATABASE";
    		$response = array("message"=>"Error:NO DATA FETCHED TO WRITE IN DATABASE");
    		header("HTTP/1.0 401 Not Found");
	     echo json_encode($response);
    	}

	
}

//$response = array("user"=>"ABC");
//header('Content-Type: application/json');
//echo json_encode($response);
//echo $data;

?>