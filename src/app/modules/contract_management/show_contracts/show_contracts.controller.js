(function() {
    'use strict';

    angular
        .module('app.modules.contract_management')
        .controller('ShowContractController', ShowContractController);

    /* @ngInject */
    function ShowContractController(Restangular) {
        var vm = this;
        vm.clients = [];
        vm.getClients = getClients;
        vm.openContract = openContract;

        init();

        ////////////////

        function init() {
            vm.getClients();
        }

        function getClients() {
            Restangular.all('clientes/').getList().then(function (clients) {
                vm.clients = clients;
            })
        }

        function openContract(client) {
            
        }
    }
})();