app.factory('registerService', ['$q', '$http', function ($q, $http) {

    var register = function (elements) {
        var defer = $q.defer();
        $http({
            method: "POST",
            url: 'https://api.hugefantacy.in/v1/auth/register',
            headers: {'Content-Type': 'application/json'},
            data: elements
        }).then(function (result) {
            defer.resolve(result.data);
        }, function (err) {
            defer.reject({message: "Some thing went wrong,please try again later"});
        });
        return defer.promise;
    };


    return {
        register: register
    }
}]);
