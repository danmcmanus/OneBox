(function() {
    'use strict';

    angular.module('app')
        .controller('dashboardController', dashboardController);

    function dashboardController($http) {
        var vm = this;
        vm.getToolDetails = function() {
            console.log('you have gotten the tool details');
        };

        function getBoxes() {

            var request = {
                method: 'GET',
                crossDomain: true,
                url: "https://p4gurfjpg5.execute-api.us-east-1.amazonaws.com/api/boxes?id=2",
            };
            $http(request)
                .then(function(response) {
                    angular.copy(response.data, vm.boxes);
                }, function(error) {
                    vm.errorMessage = "Failed to load data" + error;
                })
                .finally(function() {
                    console.log(vm.boxes);
                    vm.isBusy = false;
                });
        }
    }
}());