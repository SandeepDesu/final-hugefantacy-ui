app.config(function ($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
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
    $authProvider.facebook({
        clientId: '121943595164078'
    });
    $authProvider.google({
        clientId: '563546280609-cuva1dgflqf76osoqguv2i6baikjr0nh.apps.googleusercontent.com'
    });
});
