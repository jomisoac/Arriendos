(function() {
    'use strict';

    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);

    /* @ngInject */
    function SeedPageController($http) {
        var vm = this;
        // vm.testData = ['triangular', 'is', 'great'];
        $http.get('http://localhost:3200/api/asd').then(function (p) {
            vm.testData = p.data;
        })
    }
})();
