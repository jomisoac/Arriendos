(function () {
    'use strict';

    angular
        .module('app.modules.client_management')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.register_client', {
                url: '/gestion-clientes/registrar_cliente',
                templateUrl: 'app/modules/client_management/new_client/new_client.tmpl.html',
                // set the controller to load for this page
                controller: 'RegisterClientController',
                controllerAs: 'vm'
            })
            .state('triangular.show_clients', {
                url: '/gestion-clientes/clientes',
                templateUrl: 'app/modules/client_management/show_clients/show_clients.tmpl.html',
                // set the controller to load for this page
                controller: 'ShowClientsController',
                controllerAs: 'vm'
            });

        triMenuProvider.addMenu({
            name: 'Gestion de clientes',
            icon: 'zmdi zmdi-accounts-alt',
            type: 'dropdown',
            priority: 1.1,
            children: [
                // {
                //     name: 'Registrar cliente',
                //     state: 'triangular.register_client',
                //     type: 'link'
                // },
                {
                    name: 'Mostrar clientes',
                    state: 'triangular.show_clients',
                    type: 'link'
                }]
        });
    }
})();
