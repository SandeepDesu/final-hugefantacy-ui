app.factory('loginService', ['$q', '$auth', '$http', function ($q, $auth, $http) {

    var authenticate = function (elements) {
        var defer = $q.defer();
        $http({
            method: "POST",
            url: 'https://api.hugefantacy.in/v1/auth/custom',
            headers: {'Content-Type': 'application/json'},
            data: elements
        }).then(function (result) {
           defer.resolve(result.data);
        }, function (err) {
            defer.reject({message:"Some thing went wrong,please try again later"});
        });
        return defer.promise;
    };

    var socialLogin = function (provider) {
        var defer = $q.defer();
        $auth.authenticate(provider).then(function (result) {
            if (result.status === 201) {
                defer.resolve(result.data);
            } else {
                defer.reject({message: "Some thing went wrong"});
            }
        }).catch(function (err) {
            defer.reject({message: "Some thing went wrong"});
        });
        return defer.promise;
    };

    return {
        authenticate: authenticate,
        socialLogin: socialLogin
    }
}]);
