(function () {
    'use strict';

    angular
        .module('app.modules.contract_management')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.show_contracts', {
                url: '/gestion-contratos/contratos',
                templateUrl: 'app/modules/contract_management/show_contracts/show_contracts.tmpl.html',
                // selecciona el controlador que se cargara en esta pagina
                controller: 'ShowContractController',
                controllerAs: 'vm',
                data: {
                    layout: {
                        contentClass: 'triangular-non-scrolling',
                        footer: false
                    }
                }
            })
            .state('triangular.new_contract', {
                url: '/gestion-contratos/nuevo_contrato',
                templateUrl: 'app/modules/contract_management/new_contract/new_contract.tmpl.html',
                // selecciona el controlador que se cargara en esta pagina
                controller: 'NewContractController',
                controllerAs: 'vm'
            });

        triMenuProvider.addMenu({
            name: 'Gestion de contratos',
            icon: 'zmdi zmdi-assignment',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Nuevo contrato',
                state: 'triangular.new_contract',
                type: 'link'
            }, {
                name: 'Mostrar contratos',
                state: 'triangular.show_contracts',
                type: 'link'
            }]
        });
    }
})();
