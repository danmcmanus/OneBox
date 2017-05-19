'use strict';

angular.
module('core.box').
factory('Box', ['$resource',
    function($resource) {
        return $resource('https://p4gurfjpg5.execute-api.us-east-1.amazonaws.com/api/boxes', {}, {
            query: {
                method: 'GET',
                //params: {boxId: 'boxid'},
                isArray: true
            }
        });
    }
]);