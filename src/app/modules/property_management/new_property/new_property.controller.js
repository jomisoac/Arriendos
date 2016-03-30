(function() {
    'use strict';

    angular
        .module('app.modules.contract_management')
        .controller('SeedPageController', SeedPageController);

    /* @ngInject */
    function SeedPageController() {
        var vm = this;
        vm.testData = ['triangular', 'is', 'great'];
    }
})();