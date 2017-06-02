app.directive('emailValidation', function () {
    return {
        restrict: "A",
        require: "^ngModel",
        link: function (scope, ele, attr, ctrl) {
            ctrl.$parsers.push(function(viewValue) {
                console.log(viewValue);
            })
        }
    }
});
