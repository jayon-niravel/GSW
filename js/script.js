app.controller('signupController',function($scope){
	$scope.user = "Abhijeet";
	
}).controller("queryController",function($scope){
	
}).controller("itemsController",function($scope){
  
})
.controller("loginController",function($scope,$state,AuthService){
    

    $scope.Login = function(){
        //console.log($scope.username,$scope.password);
        var obj = AuthService.login($scope.username,$scope.password);
        console.log(obj);
    };
    //angular.element('#login_modal').trigger('click');

})
.controller("homeController",function($scope,$state){
	$scope.user = "Abhijeet Singh Gureniya";
	$scope.FBLogin = function(){
		FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     console.log(response);
     FB.api('/me?locale=en_US&fields=name,email', function(response) {
       console.log('Good to see you, ' + response.name + '.');
       console.log(response);
     });
     $('#login_modal').modal('hide');
     $state.go('fbdialog');
    } else {
     console.log('User cancelled login or did not fully authorize.');
     $('#login_modal').modal('hide');
     $state.go('error');
    }
});
};
})
;

app.run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$routeChangeSuccess", function(userInfo) {
    console.log(userInfo);
  });

  $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
    if (eventObj.authenticated === false) {
      $state.go("login");
    }
  });
}]);

