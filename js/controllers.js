app
.controller('ApplicationController',function ($scope,USER_ROLES,AuthService,Session,$state,$rootScope,$http,$timeout,Session,CartService) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;

  /*Date picker code*/
  $rootScope.closePopup = function(){
    //console.log(document.getElementById('popup'));
    document.getElementById("popup").style.display = "none";
  }
  $rootScope.showPopup = function(message){
    //console.log(document.getElementById('popup'));
    document.getElementById("popup").style.display = "block";
    document.getElementById("message").innerHTML = message;
  }
/*var picker = new MaterialDatetimePicker({})
      .on('submit', function(d) {
        //$('#field').value = d;
        $('input[name=from1]').val(d);
        $('input').trigger('input'); // Use for Chrome/Firefox/Edge
        $('input').trigger('change');
        //alert(d);
      });*/

  /*Date picker code ends*/

  $scope.sendMail = function(email){
    //$rootScope.showPopup(email);
    $http.post('php/sendMail.php',{'email':email}).then(function(res){
            console.log(res);
            $rootScope.showPopup(res.data.message);
            $state.go('default');
        },function(error){
          console.log(error);
          $rootScope.showPopup("Given Email Not Registered With Us. Enter a Valid Email.");
        });
  };


  $scope.resetPassword =function(password){

      $http.post('php/forgetPassword.php',{'email':email,"email":$rootScope,"token":$rootScope}).then(function(res){
            console.log(res);
            $rootScope.showPopup(res.data.message);
            $state.go('default');
        },function(error){
          console.log(error);
          $rootScope.showPopup("Either Link Expired or Token Not Matched With EmailId");
        });
  };

  //console.log("User in session " + Session.getItem("userInfo"));
$scope.setCurrentUser = function(user){
    $scope.currentUser = user;
    //console.log("User:- ");
    //console.log(user);
  };
	
  if(Session.getItem("userInfo") != null){
    //alert(Session.getItem("userInfo"));
    $scope.setCurrentUser(Session.getItem("userInfo"));
  }

  $scope.settings = function(){
      $state.go('details');
  };
  $scope.goToCart = function(){
      $state.go('checkout');
  };
  $scope.logout = function(){
    var loggedOutBy = $rootScope.loggedInBy;
    if(loggedOutBy == "GSW"){

    }else if(loggedOutBy == "FB"){
        FB.logout();
    }else if(loggedOutBy == "GOOGLE"){
      gapi.auth2.getAuthInstance().signOut().then(function(){
        //console.log("User Signed out");
      });
    }
    Session.removeAll();
    $rootScope.$broadcast('removeAll');
    $scope.currentUser = null;
    Session.removeItem("service");
    CartService.clearCart();
    CartService.restore();
    $state.go('default');

  };

  $scope.searchBikes = function(search){
    //console.log(search);
    Session.setItem("vehicle","bikes");
    if(new Date(search.from) > new Date(search.to)){
      if(!((new Date(search.from) >= new Date()) && (new Date(search.to) >= new Date()))){
      $state.go('default');
      	$rootScope.showPopup("Select Valid Dates");
      }else{
      	$state.go('default');
      	$rootScope.showPopup("From Date Cannot be greater that To date.");
      }
    }else if(new Date(search.from).valueOf() == new Date(search.to).valueOf()){
    	$state.go('default');
      	$rootScope.showPopup("From And To date Cannot Be Same");
    }
    else{
      //console.log(("#location1").val());
    	Session.setItem("search",search);
      $state.go('items',{data: search});
    }
    
   // console.log("Search clicked");
  };
  $scope.searchCars = function(search){
  //alert(search.vehicle);
    console.log(search);
    Session.setItem("vehicle","cars");
    if(new Date(search.from) > new Date(search.to)){
      if(!((new Date(search.from) >= new Date()) && (new Date(search.to) >= new Date()))){
      $state.go('default');
      	$rootScope.showPopup("Select Valid Dates");
      }else{
      	$state.go('default');
      	$rootScope.showPopup("From Date Cannot be greater that To date.");
      }
    }else if(new Date(search.from).valueOf() == new Date(search.to).valueOf()){
    	$state.go('default');
      	$rootScope.showPopup("From And To date Cannot Be Same");
    }
    else{
      //console.log($("#location1").val());
    	Session.setItem("search",search);
      $state.go('items',{data: search});
    }
    
    console.log("Search clicked");
  };
  $scope.contactForm = function(user){
  $http.post('php/suggestions.php',{'registered':'no','message':user.message,'name':user.name,'email':user.email}).then(function(res){
            $rootScope.showPopup("Thanks for Your Valuable Feedback");
            $scope.user ='';
            $('#contact').modal('hide');
        },function(error){
          $rootScope.showPopup("Error While Saving Data, Try again.");
          $('#contact').modal('hide');
        });
  };

})
.controller("DetailsController",function($scope,$state,Session,$http){
	
	
  $scope.submit = function(message){
  $http.post('php/suggestions.php',{'CID':Session.getItem("userInfo").data.CID,'message':message,'name':Session.getItem("userInfo").data.Cname,'email':Session.getItem("userInfo").data.Email_ID}).then(function(res){
            $rootScope.showPopup("Thanks for Your Valuable Feedback");
            $scope.message='';
            
        },function(error){
          $rootScope.showPopup("Error While Saving Data, Try again.");
        });
  };
  
  $scope.cancelRide = function(transactionId){
  $http.post('php/suggestions.php',{'CID':Session.getItem("userInfo").data.CID,'transID':transactionId}).then(function(res){
            $rootScope.showPopup("Ride Cancelled Successfully.");
            
        },function(error){
          $rootScope.showPopup("Cannot Cancel Ride.");
        });
  };

  var data = Session.getItem("userInfo");
  $scope.cname=data.data.Cname;
  $scope.cemail=data.data.Email_ID;
  //alert(data);
  $scope.name = data.data.Cname;
  $scope.email = data.data.Email_ID;
  $scope.phone = data.data.phone;
  //alert($scope.name);
	
	$http.post('php/transactions.php',{'CID':Session.getItem("userInfo").data.CID}).then(function(res){
            console.log(res);
            $scope.transactions = res.data;
            console.log($scope.transactions);
            
        },function(error){
          $rootScope.showPopup("Error retrieving details");
        });

}).controller("checkoutController",function($scope,CartService,$state,$http,$rootScope,$window,Session){
	CartService.restore();
	/*$scope.clearCart = function(){
		Session.removeItem('count');
    Session.removeItem('service');
    Session.removeItem('Products');
    Session.removeItem('search');
    Session.removeItem('hashtable');
    Session.removeItem("hashtable-values");
    Session.removeItem("hashtable-numberOfValues");
    Session.removeItem("hashtable-size");
    Session.removeItem("hashtable-count");
    CartService.restore();
    $scope.cart = [];
    
	};*/
	$scope.discount = 0;
	if(Session.getItem("Products")!=null){
	$scope.discount = Session.getItem("Products")[0].discount;
	//alert(Session.getItem("Products")[0].discount);
	$scope.discount = Session.getItem("Products")[0].discount;
	}
  $scope.cart = CartService.cart;

  $rootScope.$broadcast("calculateTotal");
  $scope.total = $rootScope.totalAmount;
  console.log('Cart Printing:- ');
  console.log(CartService.cart);
  prodUpdate();
  function prodUpdate(){
  $scope.total = $rootScope.totalAmount;
}
  $scope.removeFromCart = function(itm){
        CartService.removeFromCart(itm);
        prodUpdate();
        $scope.cart = CartService.cart;
    }
    $scope.from = CartService.from;
    $scope.to = CartService.to;
    
    $scope.payment = function(data){
      //alert($scope.checked);
    if($scope.checked==true){
    //alert("Going for payment");
    //alert(Session.getItem("userInfo").data.CID);
    console.log(Session.getItem("userInfo"));
    //alert(Session.getItem("userInfo").data.CID);
    //console.log("Payment data:-");
    console.log(data);
    $scope.data = data;
    	$http({url : './php/request.php', data : {"V_Data" : $scope.data,"from":CartService.from,"to":CartService.to,"CID":Session.getItem("userInfo").data.CID,"location":"Thane"}, method : 'POST', dataType : "js", isArray:true}).then(function(res){
    	//trial
    	Session.removeItem('count');
    Session.removeItem('service');
    Session.removeItem('Products');
    Session.removeItem('search');
    Session.removeItem('hashtable');
    Session.removeItem("hashtable-values");
    Session.removeItem("hashtable-numberOfValues");
    Session.removeItem("hashtable-size");
    Session.removeItem("hashtable-count");
    CartService.restore();
    $scope.cart = [];
    	//trial
    	console.log("Printing Response");
    	console.log(res);
    	$window.open(res.data.url,'_self');
      //$state.go('confirmation');
    	},function(error){
    	//trial
    	/*Session.removeItem('count');
    Session.removeItem('service');
    Session.removeItem('Products');
    Session.removeItem('search');
    Session.removeItem('hashtable');
    Session.removeItem("hashtable-values");
    Session.removeItem("hashtable-numberOfValues");
    Session.removeItem("hashtable-size");
    Session.removeItem("hashtable-count");
    CartService.restore();
    $scope.cart = [];*/
    	//trial
    	//console.log(error);
    		$rootScope.showPopup("Please Verify Your Mobile Number.");
        $state.go("phoneVerify");
    	});
    };
}
})
.controller("itemsController",function($scope,$state,$http,CartService,Session){
	$scope.names = ["Emil", "Tobias", "Linus"];
	CartService.restore();
  	//console.log("Products:-  " + CartService.products);
	//$scope.products = CartService.products;
	$scope.products = CartService.count;
	
	if(Session.getItem("Products")!=null){
		$scope.items = Session.getItem("Products");
	}
	if(Session.getItem("search")!=null){
    $scope.search=Session.getItem("search");
  }
  
  if($state.params.data != null){
  //CartService.location = $state.params.data.location;
  console.log($state);
  console.log("CartService from " + CartService.from + " to " + CartService.to);
  //alert($state.params.data.vehicle != 'cars');
  if($state.params.data.vehicle != 'cars'){
  $http.post('php/products.php',$state.params.data).then(function(res){
            console.log(res.data);
            //$scope.items = res.data;
            //Session.setItem("Products",res.data);
            CartService.updateProductsData(res.data);
            $scope.items = Session.getItem("Products");

        });
        }else{
        	$http.post('php/cars.php',$state.params.data).then(function(res){
            console.log(res.data);
            //$scope.items = res.data;
            //Session.setItem("Products",res.data);
            CartService.updateProductsData(res.data);
            $scope.items = Session.getItem("Products");

        });
        }
}

$scope.reSearch = function(search){

    //alert("Calling reSearch");
    Session.setItem("search",search);
    CartService.restore();
    if(new Date(search.from) > new Date(search.to)){
      if(!((new Date(search.from) >= new Date()) && (new Date(search.to) >= new Date()))){
      $state.go('items');
      	$rootScope.showPopup("Select Valid Dates");
      }else{
      	$state.go('items');
      	$rootScope.showPopup("From Date Cannot be greater that To date.");
      }
    }else if(new Date(search.from).valueOf() == new Date(search.to).valueOf()){
    	$state.go('items');
      	$rootScope.showPopup("From And To date Cannot Be Same");
    }
    else{
    	//console.log("ReSearch CartService from " + CartService.from + " to " + CartService.to);
    if(Session.getItem("vehicle") != 'cars'){
  $http.post('php/products.php',$scope.search).then(function(res){
            console.log(res.data);
            CartService.updateProductsData(res.data);
            $scope.items = Session.getItem("Products");
});}else{
$http.post('php/cars.php',$scope.search).then(function(res){
            console.log(res.data);
            CartService.updateProductsData(res.data);
            $scope.items = Session.getItem("Products");
});
}
    }
    
  }

//else{
//  console.log("Empty params");
//}
$scope.proceedToCheckout = function(){
  //console.log("Checkout :- ");
  //console.log($scope.cart);
  //console.log("Checkout total " + $scope.total);
  //console.log($state);
  //Session.setItem("displayData",$scope.items);
  $state.go('checkout');

}

$scope.addToCart = function(item){
        CartService.addToCart(item); 
        prodUpdate();
        //console.log("Cart Data:- ");
        //console.log(CartService.cart);
        //alert(Session.getItem("userInfo"));
        //console.log(Session.getItem("displayData"));
    }
    $scope.removeFromCart = function(itm){
        CartService.removeFromCart(itm);
        prodUpdate();
        //console.log("Cart Data:- ");
        //console.log(CartService.cart);
    }

function prodUpdate(){
$scope.products = CartService.products;
}
//console.log("Controller is ending");
//console.log($scope.cart);
})
.controller("CartController",function($scope){
    
    

    
})
.controller("TransactionController",function ($location,$scope,$http,$state,Session,GApi) {

  var str = $location.search();
  //alert("Transaction ID = " + str.transactionId);
  if(str.transactionId){
  $scope.transactionId= str.transactionId;
  
  $http.post('php/transactionConfirmation.php',{'transactionId':str.transactionId,'CID':Session.getItem("userInfo").data.CID}).then(function(res){
            //console.log(res);
            $scope.amount=res.data.amount;
            $scope.amount=res.data.amount;
            $scope.from=res.data.from;
            $scope.to=res.data.To;
            //$scope.TnD=res.data.TnD;
            
        },function(error){
          $rootScope.showPopup("Error retrieving details");
        });
  
  
  }
  
  

  
})
.controller("PasswordResetController",function ($location,$scope,$rootScope,$http,$state,Session,GApi) {

  var str = $location.search();
  //alert("Transaction ID = " + str.transactionId);
  if(str.email && str.token){
  $rootScope.email = str.email;
  $rootScope.token = str.token;
  alert($rootScope.email+" "+$rootScope.token);
  $http.post('php/forgetPassword.php',{'email':str.email,'token':str.token}).then(function(res){
            
        },function(error){
          $rootScope.showPopup("Invalid Token Or Email. Try Again.");
          $state.go('sendMail');
        });
  
  
  }
  
  
  
}).controller("SignupController",function ($scope,Session,$http,$state,GApi,$rootScope) {
    

    $scope.phoneVerify = function(phone){
        //alert(phone);
        //alert(Session.getItem("userInfo").data.Email_ID);
        //console.log("Email:- ");
        //console.log(Session.getItem("userInfo"));
        $http.post('php/phoneVerify.php',{'phone':phone,'email':Session.getItem("userInfo").data.Email_ID}).then(function(data){
            console.log(data);
            $state.go('verify1');
        },function(error){
          $rootScope.showPopup("Enter Correct Mobile Number.");
        });
    }

    $scope.createAccount = function(credentials){
        //console.log(credentials);
        $scope.correct = false;

        if(credentials.password == credentials.cpassword){
          $scope.correct = true;
        }

        if($scope.correct){
        $http.post('php/signup.php',credentials).then(function(res){
            //console.log(res);
            $scope.ph=res.digits;
            $scope.setCurrentUser(res.data);
            //console.log("Digits:- " + res.digits);
            //console.log(res.data);
            Session.setItem("userInfo",res);
            $state.go('verify');
        },function(error){
        $rootScope.showPopup("User already exists please login.");
        });
        }else{
          $rootScope.showPopup("Passwords Not Matched, Try Again");
          $scope.credentials.password='';
          $scope.credentials.cpassword='';
        }
    };
    
    $scope.verify1 = function(otp){
    	$scope.data = {
    	'OTP' : otp,
    	'CID' : Session.getItem("userInfo").data.CID
    	}
    	//console.log($scope.data);
    	$http.post('php/otpverify.php',$scope.data).then(function(res){
            $rootScope.showPopup("OTP verified Successfully");
            //console.log("OTP:- ");
           // console.log(res);
            $state.go('default');
        },function(error){
        $rootScope.showPopup("Re-Enter OTP");
        $state.go('verify1');
        });
    	
    };
    
    $scope.verify = function(otp){
    	
    	$scope.data = {
    	'OTP' : otp,
    	'CID' : Session.getItem("userInfo").data.CID
    	}
    	//console.log($scope.data);
    	$http.post('php/otpverify.php',$scope.data).then(function(res){
            $rootScope.showPopup("OTP verified Successfully");
            //console.log("OTP:- ");
           // console.log(res);
            $state.go('default');
        },function(error){
        $rootScope.showPopup("Re-Enter OTP");
        $state.go('verify');
        });
    	
    };
})
.controller("loginController",function($scope, $rootScope, AUTH_EVENTS, AuthService,$state,Session){
  $scope.user = "Abhijeet Singh Gureniya";
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
      Session.setItem("userInfo",user);
      //alert("Setted user to session");
      //console.log(user + " user");
      $rootScope.loggedInBy = "GSW";
      if(user.data.phone==null){
      	$state.go("phoneVerify");
      }else if($rootScope.previousState != ""){
          $state.go($rootScope.previousState);
      }else{
        $state.go('default');
      }
    }, function () {
   // console.log("Error Logging in:-");
    	alert("Email or Password Incorrect");
    	/*$('#login_modal').modal('show');*/
	$scope.credentials = {
    username: '',
    password: ''
  };
    });
  };
  $scope.FBLogin = function(){
    FB.login(function(response) {
    if (response.authResponse) {
     //console.log('Welcome!  Fetching your information.... ');
     //console.log(response);
     var token = response.authResponse.token;
     FB.api('/me?locale=en_US&fields=name,email', function(response) {
      // console.log('Good to see you, ' + response.name + '.');
       //console.log(response);
       $rootScope.loggedInBy = "FB";
       var credentials = {
          "id": response.email,
          "token": response.id,
          "name": response.name,
          "loggingInBy": "FB"
       };
       AuthService.login(credentials).then(function (user) {
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $scope.setCurrentUser(user);
          Session.setItem("userInfo",user);
      //alert("Setted user to session");
      //console.log(user + " user");
      if(user.data.phone==null){
      	$state.go("phoneVerify");
      }else if($rootScope.previousState != ""){
          $state.go($rootScope.previousState);
      }else{
        $state.go('default');
      }
          });
     });
     $('#login_modal').modal('hide');
     //$state.go('fbdialog');
    } else {
     //console.log('User cancelled login or did not fully authorize.');
     /*alert("Login Failed, Try Again.");*/
     
    }
},{scope: 'email,user_likes'});
};

$scope.gLogin = function(){
  handleSigninClick();
};
//google
//var apiKey = 'AIzaSyCkmQI-2tp36ESLVMFOqcP5fca-f-D1D5I';
var clientId = '853631268682-6ge54u7op5g74u1rh6d6mgg7mu99lcif.apps.googleusercontent.com';
var clientSecret = 'uEUbhGHnQeR0rDHGz38WH0rQ';
var scopes = 'profile';

function initAuth() {
  //gapi.client.setApiKey(apiKey);
  gapi.auth2.init({
      client_id: clientId,
      client_secret: clientSecret,
      scope: scopes
  }).then(function () {
    //console.log("Success");
    // Listen for sign-in state changes.
    //gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  });
}

// Get authorization from the user to access profile info
function handleSigninClick() {
  gapi.auth2.getAuthInstance().signIn().then(function(resp) {
   // console.log("Signing in....");
    makeApiCall();
    //console.log("Signing in.... complete");
  },function(error){
    $rootScope.showPopup("Login Failed, Try Again.");
  });
}

gapi.load('client:auth2', initAuth);

// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
  //console.log("Loading client data...");
  /*gapi.client.load('people', 'v1', function() {
    var request = gapi.client.people.people.get({
      resourceName: 'people/me'
    });
    request.execute(function(resp) {
      //console.log(resp);
    });
  });*/
  gapi.client.load('plus','v1', function(){
 var request = gapi.client.plus.people.get({
   'userId': 'me'
 });
 //console.log(request);
 request.execute(function(resp) {
   //console.log(resp);
  // console.log('Retrieved profile for:' + resp.displayName);
   //console.log('Response:');
   //console.log(resp.emails[0].value);
    var credentials = {
          "id": resp.emails[0].value,
          "token": resp.id,
          "name": resp.displayName,
          "loggingInBy": "GOOGLE"
       };
       AuthService.login(credentials).then(function (user) {
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $scope.setCurrentUser(user);
          Session.setItem("userInfo",user);
      //alert("Setted user to session");
      //console.log(user + " user");
      if(user.data.phone==null){
      	$state.go("phoneVerify");
      }else if($rootScope.previousState != ""){
          $state.go($rootScope.previousState);
      }else{
        $state.go('default');
      }
          });
 });
});
  //console.log("Client data loaded....");
  // Note: In this example, we use the People API to get the current
  // user's name. In a real app, you would likely get basic profile info
  // from the GoogleUser object to avoid the extra network round trip.
  //console.log(gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName());
}
//google end


})
;

/*app.run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$routeChangeSuccess", function(userInfo) {
   // console.log(userInfo);
  });

  $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
    if (eventObj.authenticated === false) {
      $state.go("login");
    }
  });
}]);*/

