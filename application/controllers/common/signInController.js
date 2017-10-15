app.controller('signInController',['$scope','loginService','$auth',function($scope,loginService,$auth){
    $scope.authenticate = function() {
        if($scope.emailValid && $scope.password){
            loginService.authenticate({username:$scope.username,password:$scope.password,type:'custom'}).then(function(res){
                if(res.message){
                    $scope.passwordCheck = res.message;
                }else{
                    console.log(res);
                }
            },function(err){
                $scope.passwordCheck = "Some thing went wrong,please try again later";
            });
        } else {
            $scope.passwordCheck = "Please fill required fields.";
        }
    };

    $scope.socialLogin = function(providerName){
        loginService.socialLogin(providerName).then(function(res){
              console.log(res);
        },function(err){
            $scope.passwordCheck = "Some thing went wrong,please try again later";
        });
    };
}]);
