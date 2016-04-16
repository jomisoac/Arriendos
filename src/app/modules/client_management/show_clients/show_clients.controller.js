(function() {
    'use strict';

    angular
        .module('app.modules.client_management')
        .controller('ShowClientsController', ShowClientsController);

    /* @ngInject */
    function ShowClientsController($scope,Restangular) {
        var vm = this;
        vm.clients = [];

        vm.cargarClientes = getClients;
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
            var bookmark;
            $scope.$watch('vm.query.filter', function (newValue, oldValue) {
                if(!oldValue) {
                    bookmark = vm.query.page;
                }

                if(newValue !== oldValue) {
                    vm.query.page = 1;
                }

                if(!newValue) {
                    vm.query.page = bookmark;
                }
            });
            getClients();
        }

        function getClients() {
            vm.clients = [];
            vm.clients = Restangular.all('clientes/').getList().$object;
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';

            if(vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }
    }
})()