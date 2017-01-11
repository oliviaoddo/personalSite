angular.module('personalSiteApp')
.directive('footerApp', function(){
  return{
    templateUrl: 'templates/footer.html',
    // controller:'mainController',
    replace: 'true'
  }
});