app.controller('signInController',['$scope','loginService',function($scope,loginService){
    $scope.authenticate = function() {
       if($scope.username === null || $scope.username === undefined){
           $scope.emailErrorMessage = "Please enter email address";
       }else if($scope.password === null || $scope.password === undefined){
           $scope.passwordErrorMessage = "Please enter password";
       }else {
           $scope.emailErrorMessage = null;
           $scope.passwordErrorMessage = null;
           loginService.authenticate({
               username:$scope.username,
               password:$scope.password,
               loginType:"custom"
           }).then(function(result){
               console.log(result);
           });
       }
    };
}]);
