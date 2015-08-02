var app = angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'appController'
]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/abc', {
        templateUrl: 'temp/abc.html'
    }).when('/blog', {
        template: '<iframe src="/blog/" frameborder="0"></iframe>'
    }).when('/ABC', {
        template: '<h1 class="ABC">ABC</h1>'
    }).otherwise({
        redirectTo: '/abc'
    });
}]);

var appController = angular.module('appController', []);
appController.controller('viewCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    $scope.$on('$routeChangeSuccess', function (event) {
        if(/\/blog/.test($location.path())){
            $scope.isBack = false;
            return false;
        }else{
            $scope.isBack = true;
        }
    })
}]);
app.run(['$rootScope', function ($rootScope) {
    $rootScope.temp = [{
        url: '/abc'
    }, {
        url: '/ABC',
        children: {
            url: '/def'
        }
    },
        {
            url: '/blog'
        }

    ];
}]);