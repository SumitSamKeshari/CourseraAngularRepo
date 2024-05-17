(function (){
  'use strict';
  angular.module('MsgApp',[])
  .controller('MsgController',MsgController);

  MsgController.$inject=['$scope'];
  function MsgController($scope){
    $scope.name ="Sumit";
    $scope.stateOfBeing ="Short";

    $scope.sayMassage=function(){
      return "Sumit likes to eat healthy snacks at night!"
    };

    $scope.feedSourabh=function() {
      $scope.stateOfBeing ="Long";
    }
  }
})();
