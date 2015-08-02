var app=angular.module('app',[
    'ngAnimate',
    'ngRoute',
    'appController'
]);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/abc',{
        templateUrl:'temp/abc.html'
    }).when('/abc/def',{
        templateUrl:'temp/def.html'
    }).when('/ABC',{
        template:'<h1 class="ABC">ABC</h1>'
    }).otherwise({
        redirectTo:'/abc'
    });
}]);

var appController=angular.module('appController',[]);
appController.controller('viewCtrl',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
    $scope.$on('$routeChangeSuccess',function(event){
        $scope.isBack=false;
        angular.forEach($rootScope.temp,function(obj,index){
            if(/^\/\w+\/\w+$/.test($location.path())){
                $scope.isBack=false;
                return false;
            }else{
                $scope.isBack=true;
            }
        });
    })
}]);
app.run(['$rootScope',function($rootScope){
    $rootScope.temp=[{
            url: '/abc',
            children: {
                url: '/def'
            }
        },{
        url: '/ABC',
        children: {
            url: '/def'
        }
    }
    ];
}]);