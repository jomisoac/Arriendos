(function() {
    'use strict';

    angular
        .module('app.modules.payment_management')
        .controller('ShowPaymentsController', ShowPaymentsController);

    /* @ngInject */
    function ShowPaymentsController($scope, Restangular) {
        var vm = this;
        vm.payments = [];
        vm.getPayments = getPayments;
        vm.removeFilter = removeFilter;

        vm.query = {
            filter: '',
            limit: '10',
            order: '-id',
            page: 1
        };
        vm.selected = [];

        vm.filter = {
            options: {
                debounce: 500
            }
        };

        init();

        function init() {

        }

        function getPayments() {
            
        }

        function removeFilter() {
            vm.filter.show = false;
        }
    }
})();