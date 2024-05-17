(function (){
'Use strict';

//X="HELLO";  //It is wrong without var keyword, here use strict ,restrict the wrong code ,It show console error
angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope){
$scope.name ="Sumit";
$scope.SayHello= function(){
  return "Hello Coursera";
};
});

})();
