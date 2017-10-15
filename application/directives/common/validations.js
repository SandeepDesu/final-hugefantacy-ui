app.directive('emailValidation', function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, ele, attr, ctrl) {
            ctrl.$parsers.push(function(emailValue) {
                scope.emailValid = false;
                var emailValid = (emailValue && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailValue) ? true : false);
                if(!emailValid){
                    scope.emailCheck = 'Please enter a valid email.';
                } else {
                    scope.emailCheck = "";
                    scope.emailValid = true;
                }
                return emailValue;
            })
        }
    }
}).directive('passwordValidation',function(){
    return {
        restrict :"A",
        require :"ngModel",
        link: function(scope,ele,attr,ctrl){
            ctrl.$parsers.push(function(pswdVal){
                scope.passwordValid = false;
                var pswdValid = (pswdVal && /((?=.*\d)(?=.*[a-z])(?=.*[@#$%]).{6,20})/.test(pswdVal) ? true : false);
                if(!pswdValid){
                    scope.passwordCheck = "Password must be minimum 6 characters and 1 number and 1 special character."
                } else {
                    scope.passwordCheck = "";
                    scope.passwordValid = true;
                }
                return pswdVal;
            })
        }
    }
});
