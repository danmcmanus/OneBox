'use strict';

// Register `boxDetail` component, along with its associated controller and template
angular.
module('boxDetail').
component('boxDetail', {
    templateUrl: 'box-detail/box-detail.template.html',
    controller: ['$routeParams', 'Box',
        function BoxDetailController($routeParams, Box) {
            var self = this;

            self.box = Box.get({}, function(box) {
                self.newBox = angular.copy(self.box);
                console.log(self.newBox);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});