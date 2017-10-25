var app = angular.module('GetSetWheels',(['ui.router','angular-google-gapi','ngCookies','ngStorage']));


//console.log(Storage); 
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1768761420037591',
    xfbml      : true,
    version    : 'v2.7'
  });
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};
(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function statusChangeCallback(response) {
  //console.log('statusChangeCallback');
  //console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      //console.log("We are connected");
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      //console.log("We are not connected.");
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      //console.log("We are not logged in.");
    }
  }

  function testAPI() {
    //console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?locale=en_US&fields=name,email', function(response) {
      //console.log('Successful login for: ' + response.name);
    });
  }




//Authentication Module integration start

app.run(function ($rootScope, AUTH_EVENTS, AuthService,$state,CartService,Session,$templateCache,$window) {


  //debug on start
    //console.log("Data is session start");
    for ( var i = 0, len = $window.localStorage.length; i < len; ++i ) {
    //console.log($window.localStorage.key( i ));
    }
    //console.log("Data in session end");
  //end debug on start 
  $rootScope.$on('removeAll',function(){
      Session.removeAll();
  });
  
  
  $rootScope.$on('calculateTotal',function(){
      var one_day=1000*60*60*24;
      var date_from = new Date(CartService.from).getTime();
      var date_to = new Date(CartService.to).getTime();
      var difference_ms = date_to - date_from;
      var days = Math.ceil(difference_ms/one_day);
      //alert("Day:-");
      //alert(Math.ceil(difference_ms/one_day));


      $rootScope.totalAmount = 0;

      CartService.cart.forEach(function(item,index){

        $rootScope.totalAmount += parseInt(item.Daily_rate*item.quantity*days);

      });
      //alert($rootScope.totalAmount);
  });
  
  
	$rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
	
  //Session.removeItem('userInfo');
  //alert("Checking user in session");
  //CartService.restore();
  //console.log(Session.getItem('userInfo') + " user info in session");
	//alert("checking app run function");
  $rootScope.$on('$stateChangeStart', function (event, next) {
    //console.log(event);
    //console.log(next);
    
    if(next.url == '/checkout'){
      //alert("Inside checkout");
      if(!AuthService.isAuthenticated()){
        //alert("Please Login For Booking.");
        $rootScope.showPopup("Please Login Before Purchasing");
        event.preventDefault();
        $state.go('login');
        //$state.go("login");
      }
    }


  });

  $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
    //console.log(from);
    /*if(from.name == "")
      alert("directly came to login state.");*/
   if(to.name == 'login'){
    $rootScope.previousState = from.name;
    //alert("Previous state is " + $rootScope.previousState);
   }
});

});


//constants
app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
}).constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
});
/*app.directive('loginDialog', function (AUTH_EVENTS) {
  return {
    restrict: 'A',
    template: '<div ng-if="visible" ng-include="\'login-form.html\'">',
    link: function (scope) {
      var showDialog = function () {
        scope.visible = true;
      };
  
      scope.visible = false;
      scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
      scope.$on(AUTH_EVENTS.sessionTimeout, showDialog)
    }
  };
});*/


//Authentication Module integration end
  






//Carousel begins here
jQuery(document).ready(function() {

  jQuery('.carousel[data-type="multi"] .item').each(function(){
    var next = jQuery(this).next();
    if (!next.length) {
      next = jQuery(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo(jQuery(this));
    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = jQuery(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $("#success-alert").hide();
            
});
//Carousel ends here



