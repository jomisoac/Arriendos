(function () {
    'use strict';

    angular
        .module('app.modules.payment_management')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.register_payment', {
                url: '/gestion-pagos/registrar_pago',
                templateUrl: 'app/modules/payment_management/new_payment/new_payment.tmpl.html',
                // set the controller to load for this page
                controller: 'NewPaymentController',
                controllerAs: 'vm',
                data: {
                    layout: {
                        contentClass: 'invoice printable'
                    }
                }
            })
            .state('triangular.show_payments', {
                url: '/gestion-pagos/pagos',
                templateUrl: 'app/modules/payment_management/show_payments/show_payments.tmpl.html',
                // set the controller to load for this page
                controller: 'ShowPaymentsController',
                controllerAs: 'vm'
            })
            .state('triangular.payment_factura', {
                url: '/gestion-pagos/factura/:pago',
                templateUrl: 'app/modules/payment_management/new_payment/invoice_payment.tmpl.html',
                // set the controller to load for this page
                controller: 'InvoiceController',
                controllerAs: 'vm',
                params: {pago : null}
            });

        triMenuProvider.addMenu({
            name: 'Gestion de pagos',
            icon: 'zmdi zmdi-money',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Registrar pago',
                state: 'triangular.register_payment',
                type: 'link'
            }, {
                name: 'Mostrar pagos',
                state: 'triangular.show_payments',
                type: 'link'
            }]
        });
    }
})();
