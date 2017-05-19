(function() {
    'use strict';

    angular.module('app')
        .controller('toolDetailsController', toolDetailsController);

    function toolDetailsController($http) {
        var vm = this;
        vm.tool = {};

        vm.getTool = function() {

            var request = {
                method: 'GET',
                crossDomain: true,
                url: "https://p4gurfjpg5.execute-api.us-east-1.amazonaws.com/api/tool",
            };
            $http(request)
                .then(function(response) {
                    console.log(response.data[0]);
                    angular.copy(response.data[0], vm.tool);
                }, function(error) {
                    vm.errorMessage = "Failed to load data" + error;
                })
                .finally(function() {
                    console.log(vm.tool);
                    vm.isBusy = false;
                });
        };
    }
})();