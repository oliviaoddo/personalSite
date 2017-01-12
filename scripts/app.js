var app = angular.module("personalSiteApp", ["ngRoute"]);

// routes
app.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        })
        // route for the projects page
        .when('/projects', {
            templateUrl : 'templates/projects.html',
            controller  : 'mainController'
        })
        .otherwise('/', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        });
 
});