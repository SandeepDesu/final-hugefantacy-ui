app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/common/home.html'
        })
    .state('sign-in', {
        url: '/sign-in',
        templateUrl: 'views/common/sign-in.html'
    })
    .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'views/common/sign-up.html'
    });
});
