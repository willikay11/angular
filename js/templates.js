
    
    var app = angular.module('templatesApp', ['ngRoute','ngMessages']);

    // Ng-Routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the main page
            .when('/',{
                templateUrl : 'templates/main.html',
                controller  : 'mainController'               
            }) 
            // route for the Login page
            .when('/login', {
                templateUrl : 'templates/login.html',
                controller  : 'loginController'
            })

            // route for the Register page
            .when('/register', {
                templateUrl : 'templates/Register.html',
                controller  : 'registerController'
            })
    });

    app.controller('mainController', function($scope) {
    

    });
   
    app.controller('loginController', function($scope) {
    
        $scope.firstName = localStorage.getItem("firstName");
        $scope.secondname = localStorage.getItem("secondname");
        $scope.email = localStorage.getItem("email");
        $scope.password = localStorage.getItem("password");

        $scope.login = function(){
            var EnteredEmail = $scope.email;
            var EnteredPassword = $scope.password;

            if($scope.email == EnteredEmail && $scope.password == EnteredPassword){
                $scope.message =  "Login Successful";
            }else{
                $scope.message = "Invalid Credentials";
            }
        };

    });

    app.controller('registerController', function($scope) {
        //save user data
        $scope.register = function() {
            var fname = $scope.firstname;
            var sname = $scope.secondname;
            var email = $scope.email;
            var password = $scope.password;

            if(fname!==""){
                localStorage.setItem("firstName", fname);
                $scope.firstName = localStorage.getItem("firstName");
            }
            if(sname!==""){
                localStorage.setItem("secondname", sname);
                $scope.secondname = localStorage.getItem("secondname");
            }
            if(email!==""){
                localStorage.setItem("email", email);
                $scope.email = localStorage.getItem("email");
            }
            if(password!==""){
                localStorage.setItem("password", password);
                $scope.password = localStorage.getItem("password");
                message = "Registration Successful! ";
            }
        };
    });
