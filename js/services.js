app.factory('CartService',function($http,$state,$rootScope,Session,$window){
    
    var hashTable = new HashTable(10);
    //console.log(hashTable );
    if(Session.getItem("hashtable-values")!=null){
    	hashTable.values=Session.getItem("hashtable-values",hashTable.values);
        hashTable.numberOfValues=Session.getItem("hashtable-numberOfValues",hashTable.numberOfValues);
        hashTable.size=Session.getItem("hashtable-size",hashTable.size);
        hashTable.count=Session.getItem("hashtable-count",hashTable.count);
    }
	
//hashTable.add('fifth', 5);
//console.log(hashTable.search('fifth'));
//hashTable.remove('fifth');
   
    
    var cartService = {};
    
    cartService.cart = [];
    
    cartService.products = 0;
    cartService.reInit = function(){
		if(Session.getItem("hashtable-values")!=null){
    	hashTable.values=Session.getItem("hashtable-values",hashTable.values);
        hashTable.numberOfValues=Session.getItem("hashtable-numberOfValues",hashTable.numberOfValues);
        hashTable.size=Session.getItem("hashtable-size",hashTable.size);
        hashTable.count=Session.getItem("hashtable-count",hashTable.count);
    }
	}
    cartService.from = '';
    cartService.to = '';
    cartService.total = 0; 
    cartService.location = '';
    
    cartService.clearCart = function(){
      cartService.cart = [];
      cartService.products = 0;
      cartService.from = '';
      cartService.to = '';
      cartService.total = 0; 
      cartService.location = '';
      cartService.cart = [];
      cartService.count= 0;
      hashTable = new HashTable(10);
    };
    
    cartService.restore = function(){
    cartService.cart = [];
    cartService.count= 0;
    cartService.products = 0;
    
    cartService.from = '';
    cartService.to = '';
    cartService.total = 0; 
    cartService.location = '';
    	//alert("Calling CartService.restore()");
		if(Session.getItem("service")!=null){
    cartService.cart = Session.getItem("service");
    //console.log("service");
    }
	if(Session.getItem("count")!=null){
    cartService.products = Session.getItem("count");
    //console.log("count");
    }	
    if(Session.getItem("hashtable-count")!=null){
    cartService.count= Session.getItem("hashtable-count");
    //console.log("count :- " + cartService.count);
    }	
    if(Session.getItem("search")!=null){
    cartService.from = Session.getItem("search").from;
    cartService.to = Session.getItem("search").to;
    cartService.location = Session.getItem("search").location;
    //console.log("from-to-location");
    }
    
	};
    /*cartService.updateItem = function(item){
    	cartService.cart.forEach(function(v,index){
          if(item.V_ID == v.V_ID){
          cartService.cart[index].quantity = parseInt(v.quantity) + 1;
            }
        });
    };*/
    
    
    
    cartService.updateProductsData = function(data){
      //alert(cartService.cart.length);
      if(cartService.cart.length == 0){
      data.forEach(function(d,ind){
              
                data[ind].Daily_rate = parseInt(d.Daily_rate);
              
          });
        Session.setItem("Products",data);
      }else{
        cartService.cart.forEach(function(v,index){
          data.forEach(function(d,ind){
          data.forEach(function(d,ind){
              
                data[ind].Daily_rate = parseInt(d.Daily_rate);
              
          });
              if(v.V_ID == d.V_ID){
                data[ind].quantity = v.quantity;
              }
          });
        });
        Session.setItem("Products",data);
      }
    };
    
    updateProducts = function(itm,qty){
      var items = Session.getItem("Products");
      //var newItems = [];
      items.forEach(function(item,index){
      
      	if(item.V_ID == itm.V_ID){
      		items[index].quantity = ""+parseInt(qty);
      	}
      	
      });
      //console.log("Modified cart items");
      //console.log(items);
      Session.setItem("Products",items);
    };
    
    cartService.addToCart = function(v){
    	cartService.reInit();
    	if(hashTable.search( v.V_ID ) == null){
    		hashTable.add(v.V_ID,v);
    		hashTable.count++;
    		v.quantity = parseInt(v.quantity) + 1;
    		updateProducts(v,v.quantity);
    		//cartService.total += parseInt(v.Daily_rate);
    	}else{
    		hashTable.remove(v.V_ID);
    		v.quantity = parseInt(v.quantity) + 1;
    		hashTable.add(v.V_ID,v);
    		hashTable.count++;
    		updateProducts(v,v.quantity);
    		//cartService.total += parseInt(v.Daily_rate);
    	}
    	//console.log(hashTable.search(v.V_ID));
        cartService.products +=1;
        cartService.populateCart();
        /*$("#success-alert").css("display","block");
        $("#success-alert").alert();
                $("#success-alert").fadeTo(1000, 500).slideUp(500, function(){
               $("#success-alert").slideUp(500);
                });*/ 
                
        Session.setItem("service",cartService.cart);
        Session.setItem("count",cartService.products);
        cartService.restore();
        Session.setItem("hashtable-values",hashTable.values);
        Session.setItem("hashtable-numberOfValues",hashTable.numberOfValues);
        Session.setItem("hashtable-size",hashTable.size);
        Session.setItem("hashtable-count",hashTable.count);
        //console.log("Cart data after addition :- ");
        //console.log(cartService.cart);
        //console.log("Hashtable No. of values:- " + Session.getItem("hashtable-numberOfValues",hashTable.numberOfValues));
        $rootScope.$broadcast('calculateTotal');
    };

    

    cartService.removeFromCart = function(itm){
    	cartService.reInit();
    	//console.log(cartService.cart);
    	if(hashTable.search( itm.V_ID) != null){
    		hashTable.remove(itm.V_ID);
    		hashTable.count = hashTable.count -itm.quantity;
    		updateProducts(itm,0);
    	}
    	cartService.products -= parseInt(itm.quantity);
    	cartService.cart = [];
        cartService.populateCart();
        //console.log(cartService.cart);
        //cartService.total -= parseInt(itm.Daily_rate*itm.quantity);
        Session.setItem("service",cartService.cart);
        Session.setItem("count",cartService.products);
        cartService.restore();
        Session.setItem("hashtable-values",hashTable.values);
        Session.setItem("hashtable-numberOfValues",hashTable.numberOfValues);
        Session.setItem("hashtable-size",hashTable.size);
        Session.setItem("hashtable-count",hashTable.count);
        //console.log("Cart data after removal:- ");
        //console.log(cartService.cart);
        $rootScope.$broadcast('calculateTotal');

    };

	cartService.populateCart = function(){
	cartService.cart = [];
		for(var value in hashTable.values) {
    for(var key in hashTable.values[value]) {
      cartService.cart.push(hashTable.values[value][key]);
    }
  }
  //Session.setItem("service",cartService.cart);
	};

    return cartService;
});


//HashTable Start


function HashTable(size) {
  this.values = {};
  this.numberOfValues = 0;
  this.size = size;
  this.count = 0;
}

HashTable.prototype.add = function(key, value) {
  var hash = this.calculateHash(key);
  if(!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }
  if(!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++;
  }
  this.values[hash][key] = value;
};
HashTable.prototype.remove = function(key) {
  var hash = this.calculateHash(key);
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key];
    this.numberOfValues--;
  }
};
HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size;
};
HashTable.prototype.search = function(key) {
  var hash = this.calculateHash(key);
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  } else {
    return null;
  }
};
HashTable.prototype.length = function() {
  return this.numberOfValues;
};
HashTable.prototype.print = function() {
  var string = '';
  for(var value in this.values) {
    for(var key in this.values[value]) {
      string += this.values[value][key] + ' ';
    }
  }
  //console.log(string.trim());
};



//HashTable End



app
.factory('AuthService', function ($http,$localStorage,Session,$state) {
  var authService = {};
 
  authService.login = function (credentials) {
    return $http
      .post('php/login.php', credentials)
      .then(function (res) {
        //console.log(res.data);
        //console.log(res.data);
        //$localStorage.userInfo=res.data.user;
        Session.setItem("userInfo",res.data);
        //$('#login_modal').modal('hide');
        //$state.go('fbdialog');
        //return res.data.user;
        return res;
      });
  };
 
  authService.isAuthenticated = function () {
    //alert('checking authentication - ' + Session.getItem('userInfo'));
    //console.log(Session.getItem('userInfo'));
    if(Session.getItem('userInfo') !== null){
      //console.log(Session.getItem('userInfo'));
      //console.log("Returning true");
      return true;
    }else{
      //console.log("Returning false");
      return false;
    }

  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    //console.log("Getting user from cookies");
    //console.log();
    var user = Session.getItem('userInfo');
    //console.log(user);
    //console.log("Role:- " + user.userRole + " AuthorizedRole:- " + authorizedRoles);
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(user.userRole) !== -1);
  };
 
  return authService;
})
.factory('Session', function ($window,$timeout) {
  var Session = {
      getItem: function(key) {
        return JSON.parse($window.localStorage.getItem(key));
      },
      setItem: function(key, value) {
        $window.localStorage.setItem(key,JSON.stringify(value));
      },
      removeItem: function(key) {
        $window.localStorage.removeItem(key);
      },
      removeCart: function() {
        for ( var i = 0, len = $window.localStorage.length; i < len; ++i ) {
  
  if($window.localStorage.key( i ) == "userInfo"){
    //console.log("User not removed.");
  }else{
    $window.localStorage.removeItem($window.localStorage.key( i ));
  }
}
      },
      removeAll: function() {
        for ( var i = 0, len = $window.localStorage.length; i < len; ++i ) {
    
          $timeout($window.localStorage.removeItem( $window.localStorage.key( i ) ),50);
}
      }
    };

    return Session;
})
.factory('AuthInterceptor', function ($rootScope, $q,
                                      AUTH_EVENTS) {
  return {

    request: function(config){
      //console.log("Request interceptor:- " + config);
      return $q.resolve(config);
    }/*,

    responseError: function (response) { 
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized,
        419: AUTH_EVENTS.sessionTimeout,
        440: AUTH_EVENTS.sessionTimeout
      }[response.status], response);
      return $q.reject(response);
    }*/
  };
})
.factory('AuthResolver', function ($q, $rootScope, $state) {
  return {
    resolve: function () {
      var deferred = $q.defer();
      var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
        if (angular.isDefined(currentUser)) {
          if (currentUser) {
            deferred.resolve(currentUser);
          } else {
            deferred.reject();
            $state.go('login');
            
          }
          unwatch();
        }
      });
      return deferred.promise;
    }
  };
});