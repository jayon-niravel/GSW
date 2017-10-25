/* ---------------------------- */
/* XMLHTTPRequest Enable */
/* ---------------------------- */
function createObject() {
var request_type;
var browser = navigator.appName;
if(browser == "Microsoft Internet Explorer"){
request_type = new ActiveXObject("Microsoft.XMLHTTP");
}else{
request_type = new XMLHttpRequest();
}
return request_type;
}

var http = createObject();

/* -------------------------- */
/* SIGNUP */
/* -------------------------- */
/* Required: var nocache is a random number to add to request. This value solve an Internet Explorer cache issue */
var nocache = 0;
function signUP() {
nocache = Math.random();
http.open('get', 'logout.php?'+nocache);
http.onreadystatechange = logoutreply;
http.send(null);
}
function logoutreply() {
if(http.readyState == 4){ 
var response = http.responseText;
document.location.href = 'index.php',true;
}
}

function login() {

	
var name = encodeURI(document.getElementById('name').value);
var psw = encodeURI(document.getElementById('password').value);


nocache = Math.random();
http.open('get', 'login.php?name='+name+'&psw='+psw+'&nocache = '+nocache);
http.onreadystatechange = loginReply;
http.send(null);
}


function loginReply() {

if(http.readyState == 4){ 
//var Lresponse = http.responseText;
var Lresponse = JSON.parse(http.responseText);
//alert(Lresponse.message);


if(Lresponse.message == "1")
{
document.getElementById('login_response').innerHTML ="Phone number or Password is incorrect";
}
else if(Lresponse.message == "2")
{
	document.getElementById('login_response').innerHTML ="Please try again";
}
else{
        //document.getElementById('login_response').innerHTML =Lresponse;
        //alert(Lresponse.Bdata+" "+Lresponse.Vdata+" "+Lresponse.Tdata);
	document.location.href = 'index.php',true;
	
}
 } 
 } 

function inventory(i) 
{

      if (i==1)//status
      {
            var from= encodeURI(document.getElementById('from').value);
            var to= encodeURI(document.getElementById('to').value);
            var e = document.getElementById("Vehicles");
            var vid = e.options[e.selectedIndex].value;

          if(from == "" || to == "" || vid == "null")
          {
             alert("Please Enter Date and Vehicle name");
          }
          else if(vid == "all")
          {
                nocache = Math.random();
                http.open('get', 'status.php?from='+from+'&to='+to+'&vid='+vid+'&nocache = '+nocache);
                http.onreadystatechange = inventoryReply;
                http.send(null);

          } 
          else
          { 
            
                nocache = Math.random();
                http.open('get', 'statusVID.php?from='+from+'&to='+to+'&vid='+vid+'&nocache = '+nocache);
                http.onreadystatechange = inventoryReply;
                http.send(null);

          }
         
    }
   else if (i==2)//book
   {
     var from= encodeURI(document.getElementById('from').value);
            var to= encodeURI(document.getElementById('to').value);
            var e = document.getElementById("Vehicles");
            var vid = e.options[e.selectedIndex].value;

          if(from == "" || to == "" || vid == "null" || vid == "all")
          {
             alert("Please Enter Date and Specific Vehicle name");
          }
          else if(vid != "null" && vid != "all")
          {
                //alert("Your are going to book :"+vid);
                var hi= confirm("You are going to book :"+vid+" vehicle");
                if (hi== true)
                {
                nocache = Math.random();
                http.open('get', 'book.php?from='+from+'&to='+to+'&vid='+vid+'&nocache = '+nocache);
                http.onreadystatechange = inventoryBook;
                http.send(null);
                }else
                {
                      alert("Booking Cancelled!!!");
                }
                 
                
                

          } 
         
    }

  
//var name = encodeURI(document.getElementById('name').value);
//nocache = Math.random();
//document.getElementById('test').innerHTML ="working bro";

//var newElement = document.createElement('div');
//newElement.innerHTML = "so bro";
//document.getElementById("test").appendChild(newElement);

//http.open('get', 'sms.php?nocache = '+nocache);
//http.onreadystatechange = inventoryReply;
//http.send(null);
}


function inventoryReply() {

if(http.readyState == 4){ 
//var Iresponse = http.responseText;
http.responseText = http.responseText.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
http.responseText = http.responseText.replace(/[\u0000-\u0019]+/g,""); 
var Iresponse = JSON.parse(http.responseText);


if(Iresponse.message == "1")
{
//document.getElementById('login_response').innerHTML ="Phone number or Password is incorrect";
alert(Iresponse);
}
else if(Iresponse.message == "2")
{
	//document.getElementById('login_response').innerHTML ="Please try again";
      alert("some error occured");

}
else{
var tableHeaderRowCount = 1;
var table = document.getElementById('myTable');
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}

var i=0;
while((Iresponse[i]['V_ID']).length != "")
{
    
    
     var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = Iresponse[i]['V_ID'];
    cell2.innerHTML = Iresponse[i]['Vname'];
    cell3.innerHTML = Iresponse[i]['Status'];
    cell4.innerHTML = Iresponse[i]['Details'];
i++;
}
   
	
}
 } 

}



function inventoryBook() {

if(http.readyState == 4){ 
//var Iresponse = http.responseText;
http.responseText = http.responseText.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
http.responseText = http.responseText.replace(/[\u0000-\u0019]+/g,""); 
var Iresponse = JSON.parse(http.responseText);


if(Iresponse.message == "1")
{
//document.getElementById('login_response').innerHTML ="Phone number or Password is incorrect";
alert(Iresponse);
}
else if(Iresponse.message == "2")
{
	//document.getElementById('login_response').innerHTML ="Please try again";
      alert("some error occured");

}
else{
  alert(Iresponse.message);
	
}
 } 

}





function Cancel() {


alert("Below are the bookings done!");
nocache = Math.random();
http.open('get', 'cancel.php?nocache = '+nocache);
http.onreadystatechange = CancelReply;
http.send(null);
}


function CancelReply() {

if(http.readyState == 4){ 
//var Iresponse = http.responseText;
http.responseText = http.responseText.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
http.responseText = http.responseText.replace(/[\u0000-\u0019]+/g,""); 
var Iresponse = JSON.parse(http.responseText);


if(Iresponse.message == "1")
{
//document.getElementById('login_response').innerHTML ="Phone number or Password is incorrect";
alert(Iresponse);
}
else if(Iresponse.message == "2")
{
	//document.getElementById('login_response').innerHTML ="Please try again";
      alert("some error occured");

}
else{
var tableHeaderRowCount = 1;
var table = document.getElementById('myTable');
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}

var i=0;
while((Iresponse[i]['V_ID']).length != "")
{
    
    
     var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = Iresponse[i]['V_ID'];
    cell2.innerHTML = Iresponse[i]['Vname'];
    cell3.innerHTML = Iresponse[i]['Status'];
    cell4.innerHTML = Iresponse[i]['Details'];
    //var table_len=(table.rows.length)-1;
    var data=Iresponse[i]['Details'];
    data=data.replace(/-/g, '');data=data.replace(/:/g, '');data=data.replace(/ /g, '');
    data=data.replace(/to/g, '');
   data= data.substring(0, 12);
    var data2=Iresponse[i]['V_ID'];
    var res = data + data2;


 var row = cell3.innerHTML+="</br><input type='button' style='font-size: larger; height:35px; color: teal; background-color: #FFFFC0; width:90px' value='Cancel'  onclick='remove("+res+"); return false;'></br></br>";

i++;
}
   
	
}
 } 



 } 



function remove(vid) {

alert("This booking will be deleted");
//var hi= confirm("Are you sure you want to cancel this bookings?");
                //if (hi== true)
                //{
                nocache = Math.random();
                http.open('get', 'remove.php?vid='+vid+'&nocache = '+nocache);
                http.onreadystatechange = removeReply;
                 http.send(null);
                //}else
                //{
                //      alert("Cancelled!!!");
                //}

}

function removeReply() {

if(http.readyState == 4){ 
//var Iresponse = http.responseText;
http.responseText = http.responseText.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
http.responseText = http.responseText.replace(/[\u0000-\u0019]+/g,""); 
var Iresponse = JSON.parse(http.responseText);


if(Iresponse.message == "1")
{
//document.getElementById('login_response').innerHTML ="Phone number or Password is incorrect";
alert("NO data fetched from DB");
}
else if(Iresponse.message == "2")
{
	//document.getElementById('login_response').innerHTML ="Please try again";
      alert("session not defined");

}
else{

alert("Bookings have been deleted");
var tableHeaderRowCount = 1;
var table = document.getElementById('myTable');
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}
   
	
}
 } 


}










