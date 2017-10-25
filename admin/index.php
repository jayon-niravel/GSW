<?php 
include_once('db.php');
session_start();
?>            

<!DOCTYPE html>
<html lang="en">

<head>
               
    <script src="ajax_main.js" language="javascript"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>ADMIN PANEL</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

    <!-- Theme CSS -->
    <link href="css/grayscale.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style> 
    input[type=submit] {
    width: 40%;
    padding: 12px 20px;
    margin: 2px 0;
    box-sizing: border-box;
    border: none;
    background-color: #3CBC8D;
    color: white;
    }
    input[type=text] {
    width: 40%;
    padding: 15x 20px;
    margin: 2px 0;
    box-sizing: border-box;
    border: none;
    background-color: #3CBC8D;
    color: white;
}
input[type=password] {
    width: 40%;
    padding: 15x 20px;
    margin: 2px 0;
    box-sizing: border-box;
    border: none;
    background-color: #3CBC8D;
    color: white;
}
input[type=button] {
    width: 38%;
    padding: 12px 20px;
    margin: 2px 0;
    font-size: 100%;
    box-sizing: border-box;
    border: none;
    background-color: #3CBC8D;
    color: white;
}
table,th, td {
    padding: 5px;
    text-align: left;
    border-bottom: 5px solid black;
    border-left: 5px solid black;
    background-color: #4CAF50;
    color: white;
    
}
</style>
</head>
<?php
if(!isset($_SESSION['Login'])){ echo $_SESSION["Login"];
?>
<body>
<center></br></br></br></br></br></br>
<link href = "wheels.png" rel="icon" type="image/png">
               <h2>GETSETWHEELS</h2>
               <h4>ADMIN Login</h4>
                <form action="javascript:login()" method="post">
                <div id="login_response"></div>
                <pre>
Phone Number <input type="text" value="" name="name" id="name">
Password     <input type="password" value="" name="password" id="password"></pre>
                 <INPUT TYPE="hidden" value="index" id="loginIndex">
                <input type="submit" >
                </form></center>

</body>
<?php

}
else{ 
?>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <!-- Navigation -->
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <i class="fa fa-play-circle"></i> <span class="light">ADMIN</span> PANEL
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#about" onClick='inventory()'>Inventory</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#download">Add/Remove Assets</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Account</a>
                    </li>
                     <li>
                         <a href='#' id ='loginbutton' onClick='signUP()'>logout</a>
                    </li>

                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Intro Header -->
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h5 class="brand-heading">GETSETWHEELS</h5>
                        <p class="intro-text">
                                Hello <?php echo("{$_SESSION['Aname']}".",<br />");?>
                                -You have <?php echo("{$_SESSION['Vdata']}"."  wheels on board<br />");?> 
                                -<?php echo("{$_SESSION['Tdata']}"."  transactions and ");?> 
                                <?php echo("{$_SESSION['Bdata']}"."   bookings <br />");?> </p>
                        <a href="#about" class="btn btn-circle page-scroll">
                            <i class="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- INVENTORY show the Database here in table-->
    <section id="about" class="container content-section text-center">
        <div class="row">
                <div id="test"></div>
<form  method="post">
 <h3>INVENTORY  </h3>             
<h4><pre>               
    From <input type="datetime-local" value="2017-02-14T09:00" name="from" id="from"></br>
    To   <input type="datetime-local" value="2017-02-14T21:00" name="to" id="to"></br>
Vehicles   <select name="Vehicles" id="Vehicles" value = ""><pre>
<option     value="null">select Vehicle</option>
<option     value="all">All Vehicles</option>
  <?php
if(isset($_SESSION['admin']))
{
	  $admin= mysql_real_escape_string( $_SESSION['admin'] );
	  $sql = "SELECT V_ID,Vname FROM Vehicles WHERE Admin_ID ='$admin'";
          $res = mysql_query($sql)or trigger_error(mysql_error().$sql);
         //$row = mysql_fetch_array($res);
         while( $row = mysql_fetch_array($res) )
       {
            echo $row['V_ID'];
      


 ?>
<option name="details"  value=<?php echo "{$row['V_ID']}"; ?>> <?php  echo "{$row['V_ID']}-{$row['Vname']}"; 
?> </option>
<?php } } ?>//loop ENDS
</select></br>
        <input type="button" value="status" onclick="inventory(1)" /> <input type="button" value="book" onclick="inventory(2)"/></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="Cancel ride" onclick="Cancel()" />
                </form></center>
</h4> 

   <table style="width:100%" id="myTable">
  <tr>
    <td width="5%"><h4>ID</h4></td>
    <td width="10%"><h4>Name</h4></td>
    <td width="5%"><h4>Status</h4></td> 
    <td><h4>details</h4></td>   
  </tr>
  <tr>
    <td></td>
    <td></td> 
    <td></td>
     <td></td>
  </tr>
</table>


                


        </div>
    </section>

    <!-- ADD/REMOVE ASSETS show form heree -->
    <section id="download" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Add/Remove Assets</h2>
                     Note:- Please Contact the admin-8793610729 if you want to add or remove any bikes.
                </div>
            </div>
        </div>
    </section>

    <!-- Account Section show transaction details-->
    <section id="contact" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Transaction Details</h2>
                  There are no transactions yet done.
            </div>
        </div>
    </section>
 
    <!-- Logout Section -->
    <section id="login" >
       
    </section>

    
    
    <!-- Footer -->
    <footer>
        <div class="container text-center">
            <p>GETSETWHEELS</p>
              For any Enquires:- 8793610729/8369547057
        </div>
    </footer>

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    

    <!-- Theme JavaScript -->
    <script src="js/grayscale.min.js"></script>
    

</body>

</html>
<?php
}
?>
