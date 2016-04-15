(function() {
    'use strict';

    angular
        .module('app.modules.client_management')
        .controller('RegisterClientController', RegisterClientController);

    /* @ngInject */
    function RegisterClientController() {
        var vm = this;
        vm.testData = ['triangular', 'is', 'great'];
    }
})();