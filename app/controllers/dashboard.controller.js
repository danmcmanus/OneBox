(function() {
    'use strict';

    angular.module('app')
        .controller('dashboardController', dashboardController);

    function dashboardController($http) {
        var vm = this;
        vm.getToolDetails = function() {
            console.log('you have gotten the tool details');
        };
        vm.boxes = [];

        vm.getBoxes = function() {

            var request = {
                method: 'GET',
                crossDomain: true,
                url: "https://p4gurfjpg5.execute-api.us-east-1.amazonaws.com/api/boxes?id=1"
            };
            $http(request)
                .then(function(response) {
                    angular.copy(response.data.boxes[0], vm.boxes);
                }, function(error) {
                    vm.errorMessage = "Failed to load data" + error;
                })
                .finally(function() {
                    vm.isBusy = false;
                });
        }
    }
}());