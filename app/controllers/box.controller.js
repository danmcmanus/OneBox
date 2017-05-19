(function() {
    'use strict';

    angular.module('app')
        .controller('boxController', boxController);

    function boxController($http) {
        var vm = this;

        vm.box = {};
        vm.boxes = [];

        vm.isBusy = true;

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
}());