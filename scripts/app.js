var app = angular.module("personalSiteApp", ["ngRoute", "ngCookies"]);

// routes
app.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        })
        // route for the about page
        .when('/projects', {
            templateUrl : 'templates/projects.html',
            controller  : 'mainController'
        })
 
        // route for the service page
        .when('/contact', {
            templateUrl : 'templates/contact.html',
            controller  : 'mainController'
        })

         // route for the about page
        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'mainController'
        })

        .otherwise('/', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        });
 
});