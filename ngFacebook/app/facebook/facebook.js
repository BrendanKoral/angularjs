'use strict';

angular.module('ngSocial.facebook', ['ngRoute', 'ngFacebook'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/facebook', {
            templateUrl: 'facebook/facebook.html',
            controller: 'FacebookCtrl'
        });
    }])





    .config( function( $facebookProvider ) {
        $facebookProvider.setAppId('651132995038268');
        $facebookProvider.setPermissions("email", "public_profile", "user_posts", "publish_actions", "user_photos");
    })

    .run(function ($rootScope) {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '651132995038268',
                xfbml      : true,
                version    : 'v2.7'
            });
        };


        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "http://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })

    // The above lines are all from the Facebook API, straight copy paste
    
    .controller('FacebookCtrl', ['$scope', '$facebook', function($scope, $facebook) {
        $scope.isLoggedIn = false;

        $scope.login = function () {
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    console.log('Logged in.');
                }
                else {
                    FB.login();
                }
            });
        }
    }]);