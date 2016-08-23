
    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('templatesApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
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

    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        //$scope.message = 'Everyone come and see how good I look!';
    });
    // create the controller and inject Angular's $scope
    scotchApp.controller('loginController', function($scope) {
        // create a message to display in our view
        $scope.firstName = localStorage.getItem("firstName");
        $scope.secondname = localStorage.getItem("secondname");
        $scope.email = localStorage.getItem("email");
        $scope.password = localStorage.getItem("password");

        $scope.login = function(){
            var EnteredEmail = document.getElementById("email").value;
            var EnteredPassword = document.getElementById("pwd").value;

            if($scope.email == EnteredEmail && $scope.password == EnteredPassword){
                $scope.message =  "Login Successful";
            }else{
                $scope.message = "Invalid Credentials";
            }
        };

    });

    scotchApp.controller('registerController', function($scope) {
        //save user data
        $scope.register = function() {
            var fname = document.getElementById("fname").value;
            var sname = document.getElementById("sname").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("pwd").value;

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
                message = "Registration Successful!";
            }
        };
    });
