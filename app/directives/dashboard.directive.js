(function() {
    angular.module('app')
        .directive('dashboard', dashboard);

    function dashboard() {
        return {
            controller: "dashboardController",
            controllerAs: "dashboardVm",
            templateUrl: "directives/dashboard.directive.html"
        };


    }
}());