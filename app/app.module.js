(function() {

    "use strict";

    // Creating the Module
    angular.module("app", ["ngRoute", "ngMaterial", "ngMessages", "ngAria"])
        .config(function($routeProvider) {

            $routeProvider.when("/boxes", {
                controller: "boxController",
                controllerAs: "vm",
                templateUrl: "/views/box.view.html"
            });

            $routeProvider.when("/dashboard", {
                controller: "dashboardController",
                controllerAs: "vm",
                templateUrl: "/views/dashboard.view.html"
            });

            $routeProvider.when('/dashboard:id', {
                controller: 'dashboardController',
                controllerAs: 'vm',
                template: '<dashboard></dashboard>'

            });

            $routeProvider.otherwise({ redirectTo: "/" });

        })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('light-green').backgroundPalette('green').dark();
            $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
        });
})();