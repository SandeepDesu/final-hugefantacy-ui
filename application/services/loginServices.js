app.factory('loginService',['$q',function($q){

    var authenticate = function(elements){
        var defer = $q.defer();
        defer.resolve(elements);
        return defer.promise;
    };

    return {
        authenticate:authenticate
    }
}]);
