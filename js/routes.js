app.config(function($stateProvider,$urlRouterProvider,USER_ROLES){
	$urlRouterProvider
	.otherwise('default');
	$stateProvider
	.state("signup",{
		url: "/signup",
		templateUrl: "templates/signup.html",
		controller: 'SignupController',
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor,USER_ROLES.all]
		}
	})
	.state("sendMail",{
		url: "/sendMail",
		templateUrl: "templates/sendPasswordLink.html",
	})
	.state("details",{
		url: "/details",
		templateUrl: "templates/resetPassword.html",
		controller: 'PasswordResetController',
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor,USER_ROLES.all]
		}
	})
	.state("checkLink",{
		url: "/checkLink",
		templateUrl: "templates/resetPassword.html",
		controller: 'PasswordResetController'
	})
	.state("phoneVerify",{
		url: "/phoneVerify",
		templateUrl: "templates/mobile.html",
		controller: 'SignupController',
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor,USER_ROLES.all]
		}
	})
	.state("verify",{
		url: "/verify",
		templateUrl: "templates/verify.html",
		controller: 'SignupController',
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor,USER_ROLES.all]
		}
	})
	.state("verify1",{
		url: "/verify1",
		templateUrl: "templates/verify1.html",
		controller: 'SignupController',
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor,USER_ROLES.all]
		}
	})
	.state("fbdialog",{
		url: "/fbdialog",
		templateUrl: "templates/fbdetails.html",
		controller: 'homeController',
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
		}
	})
	.state("error",{
		url: "/error",
		templateUrl: "templates/error.html",
		controller: "TransactionController",
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor,USER_ROLES.all]
		}
	})
	.state("default",{
		url: "/default",
		templateUrl: "templates/search.html"
	})
	.state("process",{
		url: "/process",
		templateUrl: "templates/process.html"
	})
	.state("blog",{
		url: "/blog",
		templateUrl: "templates/blog.html"
	})
	.state("blogpost",{
		url: "/blogpost",
		templateUrl: "templates/blogpost.html"
	})
	.state("contact",{
		url: "/contact",
		templateUrl: "templates/contact.html"
	})
	.state("about",{
		url: "/about",
		templateUrl: "templates/about.html"
	})
	.state("TnC",{
		url: "/TnC",
		templateUrl: "templates/TnC.html"
	})
	.state("FAQ",{
		url: "/FAQ",
		templateUrl: "templates/FAQ.html"
	})
	.state("PrivacyPolicy",{
		url: "/PrivacyPolicy",
		templateUrl: "templates/PrivacyPolicy.html"
	})
	.state("confirmation",{
		url: "/confirmation",
		templateUrl: "templates/confirmation.html",
		controller: "TransactionController"
	})
	.state("login",{
		url: "/login",
		templateUrl: "templates/login.html",
		controller: 'loginController',
	})
	.state("items",{
		url: "/items",
		templateUrl: "templates/items.html",
		params: {
			data: null
		},
		controller: 'itemsController',	
		data: {
			authorizedRoles: [USER_ROLES.editor,USER_ROLES.admin]
		}
	}).state("checkout",{
		url: "/checkout",
		templateUrl: "templates/checkout.html",
		controller: 'checkoutController',	
		data: {
			authorizedRoles: [USER_ROLES.editor,USER_ROLES.admin]
		}
	})
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: 'dashboard/index.html',
		data: {
			authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
		}
	}).state('protected-route', {
		url: '/protected',
		resolve: {
			auth: function resolveAuthentication(AuthResolver) { 
				return AuthResolver.resolve();
			}
		}
	});
}).config(function ($httpProvider) {
	$httpProvider.interceptors.push([
		'$injector',
		function ($injector) {
			return $injector.get('AuthInterceptor');
		}
		]);
});