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

            $routeProvider.otherwise({ redirectTo: "/" });

        })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
            $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
        });
})();