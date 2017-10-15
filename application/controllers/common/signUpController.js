app.controller('signUpController',['$scope','registerService',function($scope,registerService){
    $scope.signUp = function() {
        if ($scope.email && $scope.emailValid) {
            if ($scope.password && $scope.passwordValid) {
                if ($scope.cPassword) {
                    if ($scope.password != $scope.cPassword) {
                        $scope.passwordMatch = "Both passwords must be same."
                    } else {
                        $scope.passwordMatch = "";
                        registerService.register({
                            username:$scope.email,
                            password:$scope.password
                        }).then(function(result){
                            if(result.message){
                                $scope.passwordMatch = result.message;
                            }else{
                                console.log(result);
                            }
                        },function(err){
                            $scope.passwordMatch = "some thing went wrong, please try again later";
                        });
                    }
                } else {
                    $scope.passwordMatch = "Please enter confirm password."
                }
            } else{
                $scope.passwordCheck = "Password must be minimum 6 characters and 1 capital letter and 1 number and 1 special character.";
            }
        } else{
            $scope.emailCheck = "Please enter a valid email. Eg:example@domain.com";
        }
    }
}])