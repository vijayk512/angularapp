var app = angular.module('bimpiesApp', []);

angular.module('bimpiesApp', ['ngRoute']);

angular.module('bimpiesApp').config(function ($routeProvider) {
    // configure the routes
    $routeProvider
    .when('/', {
        // route for the home page
        templateUrl: 'pages/signin.html',
        controller: 'signinController'
    })
    .when('/profile', {
        // route for the profile page
        templateUrl: 'pages/profile.html',
        controller: 'profileController'
    })
    .when('/register', {
        // route for the profile page
        templateUrl: 'pages/register.html',
        controller: 'registerController'
    })
    .when('/forgetpassword', {
        // route for the forgetpassword page
        templateUrl: 'pages/forgetpassword.html',
        controller: 'forgetPasswordController'
    })
    .otherwise({
        // when all else fails
        templateUrl: 'pages/routeNotFound.html',
        controller: 'notFoundController'
    });
});

angular.module('bimpiesApp').controller('forgetPasswordController', function ($scope) {
    $scope.message = 'Welcome to my home page!';
});

angular.module('bimpiesApp').controller('profileController', function ($scope) {
    $scope.message = 'Welcome to my home page!';
});

angular.module('bimpiesApp').factory('bimpieService',function ($http) {
    return {
        checkLogin:
        function (data) {
            data = JSON.stringify(data);
            url = "url of api / or backend database";
            return $http.post(url, data, {
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': url }
            });
        },

        doRegistration:
        function (data, profiledata) {
            data = JSON.stringify(data);

            var predata = '{"user" :'+data+'}';
            alert(predata);
            url = "url of api / or backend database";
            $http.post(url, predata, {
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': url }
            }).then(function(response){
                var data = response.data.user;
                var userid = JSON.stringify(data.id);

                var avatar = {
                    "filename": "user_image.jpg",
                    "content": "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",
                    "content_type": "image/jpg"
                };
                
                profiledata['user_id'] = userid;
                profiledata['avatar'] = avatar;
                profiledata['cid'] = "";
                profiledata['birthday'] = "7/31/2010";
                profiledata['sex'] = "Male";
                               
                profiledata = JSON.stringify(profiledata);

                url = "url of api / or backend database";
                var predata = '{"profile" :'+profiledata+'}';
                
                $http.post(url, predata, {
                    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': url }
                })  

            });
        }
    };
});

angular.module('bimpiesApp').controller('signinController',
function ($scope, bimpieService, $route, $routeParams, $location, $http) {
    $scope.submit = function () {
        bimpieService.checkLogin($scope.signin);
    };
});

angular.module('bimpiesApp').directive("passwordVerify", function() {
    return {
        require: "ngModel",
        scope: {
            passwordVerify: '='
        },
        link: function(scope, element, attrs, ctrl) {
            scope.$watch(function() {
                var combined;

                if (scope.passwordVerify || ctrl.$viewValue) {
                    combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
                }                    
                return combined;
            }, function(value) {
                if (value) {
                    ctrl.$parsers.unshift(function(viewValue) {
                        var origin = scope.passwordVerify;
                        if (origin !== viewValue) {
                            ctrl.$setValidity("passwordVerify", false);
                            return undefined;
                        } else {
                            ctrl.$setValidity("passwordVerify", true);
                            return viewValue;
                        }
                    });
                }
            });
        }
    };
});

angular.module('bimpiesApp').controller('registerController',
function ($scope, bimpieService, $route, $routeParams, $location, $http) {
    $scope.submit = function(){
        bimpieService.doRegistration($scope.registration, $scope.profile);

    };    
});

