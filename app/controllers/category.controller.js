(function() {
    'use strict';

    angular.module('app')
        .controller('categoryController', categoryController);

    function categoryController($http) {
        var vm = this;
        vm.getToolDetails = function() {
            console.log('you have gotten the tool details');
        };
        vm.boxes = [];
        vm.tools = [];

        vm.getBoxes = function() {

            var request = {
                method: 'GET',
                crossDomain: true,
                url: "https://p4gurfjpg5.execute-api.us-east-1.amazonaws.com/api/boxes?id=1"
            };
            $http(request)
                .then(function(response) {
                    var toolIds = response.data.boxes[0].inventory.categories[0].tools;
                    var allTools = response.data.boxes[0].tools;
                   for(var j=0;j<toolIds.length;j++){
                        for(var i=0;i<allTools.length;i++){
                            if(toolIds[j] === allTools[i].id){
                                vm.tools.push(allTools[i]);
                            }
                        }
                    }
                    console.log(vm.tools);
                    //angular.copy(response.data.boxes[0], vm.boxes);
                }, function(error) {
                    vm.errorMessage = "Failed to load data" + error;
                })
                .finally(function() {
                    vm.isBusy = false;
                });
        }
    }
}());