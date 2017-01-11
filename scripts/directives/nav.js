angular.module('personalSiteApp')
.directive('navApp', function(){
  return{
    templateUrl: 'templates/nav.html',
    // controller:'mainController',
    replace: 'true'
  }
});