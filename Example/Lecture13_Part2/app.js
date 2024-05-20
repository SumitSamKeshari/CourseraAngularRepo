(function (){
  'use strict';
  angular.module('MsgApp',[])
  .controller('MsgController',MsgController)
  .filter('loves',LovesFilter);

  MsgController.$inject=['$scope',lovesFilter];
  function MsgController($scope,lovesFilter){
    $scope.name ="Sumit";
    $scope.stateOfBeing ="Short";

    $scope.sayMassage=function(){
      return "Sumit likes to eat healthy snacks at night!"
    };

    $scope.sayLovesMassage=function(){
      var msg= "Sumit likes to eat healthy snacks at night!"
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedSourabh=function() {
      $scope.stateOfBeing ="Long";
    };
  }

function LovesFilter(){
  return function( input) {
    input = input || "";
    input =input.replace("likes","loves");
    return  input;
  };
}



})();
