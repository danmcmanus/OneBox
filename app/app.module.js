(function() {

    "use strict";

    // Creating the Module
    angular.module("app", ["ngRoute", "ngMaterial", "ngMessages", "ngAria"])
        .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
            $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('light-green').backgroundPalette('green').dark();
            $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
            $locationProvider.hashPrefix('');

            $routeProvider.when("/boxes", {
                controller: "boxController",
                controllerAs: "vm",
                templateUrl: "/views/box.view.html"
            }).when("/dashboard", {
                controller: "dashboardController",
                controllerAs: "vm",
                templateUrl: "/views/dashboard.view.html"
            }).when('/dashboard:id', {
                controller: 'dashboardController',
                controllerAs: 'vm',
                template: '<dashboard></dashboard>'

            }).when('/details', {
                controller: 'toolDetailsController',
                controllerAs: 'vm',
                templateUrl: "/views/tool-details.html"
            }).otherwise({ redirectTo: "/" });

        });
})();