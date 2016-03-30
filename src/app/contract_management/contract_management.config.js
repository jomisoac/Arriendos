(function() {
    'use strict';

    angular
        .module('contract_management')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.admin-default.contract_management', {
                url: '/contract_management',
                templateUrl: 'app/contract_management/contract_management.tmpl.html'
            })
            .state('triangular.admin-default.contract_management.new_contract', {
                url: '/contract_management/new_contract',
                templateUrl: 'app/contract_management/new_contract/new_contract.tmpl.html',
                // set the controller to load for this page
                controller: 'NewContractController',
                controllerAs: 'vm'
            })
            .state('triangular.admin-default.contract_management.show_contracts',{
                url: '/contract_management/show_contracts',
                templateUrl: 'app/contract_management/show_contracts/show_contract.tmpl.html',
                // set the controller to load for this page
                controller: 'ShowContractController',
                controllerAs: 'vm'
            })
            ;

        triMenuProvider.addMenu({
            name: 'Gestion de contratos',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Nuevo contrado',
                state: 'triangular.admin-default.contract_management.new_contract',
                type: 'link'
            }, {
                name: 'Mostrar contrados',
                state: 'triangular.admin-default.contract_management.show_contracts',
                type: 'link'
            }]
        });
    }
})();
