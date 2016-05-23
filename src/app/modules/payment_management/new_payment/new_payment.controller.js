(function() {
    'use strict';

    angular
        .module('app.modules.payment_management')
        .controller('NewPaymentController', NewPaymentController);

    /* @ngInject */
    function NewPaymentController(Restangular, $mdToast, $filter, $state) {
        var vm = this;
        // vm.pago = {};
        vm.getClient = getClient;
        vm.irFactura = irFactura;

        function getClient(cliente_id) {
            vm.pago = {};
            if (cliente_id != undefined){
                Restangular.one('clientes?cedula='+cliente_id+ '&populate=contrato').getList().then(function (client) {
                    if(client[0]){
                        vm.pago.nombre_cliente = (client[0].nombre + ' ' + client[0].apellidos).toUpperCase();
                        vm.pago.identificacion_cliente = parseInt(client[0].cedula);
                        vm.pago.fecha_arrendada = $filter('date')(client[0].contrato.fecha_inicio);
                        vm.pago.fecha_pago = new Date();
                        vm.pago.valor_actual = $filter('currency')(client[0].contrato.valor_arrinedo_actual)
                        mensaje('Se cargaron los datos del arrendatario');
                    }else{
                        vm.pago = {};
                        mensaje('Este arrendatario no se encuentra registrado');
                    }
                });
            }
        }

        function mensaje(mensaje) {
            $mdToast.show({
                template: '<md-toast style="font-weight:bold;" id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + mensaje + '</div></md-toast>',
                hideDelay: 5000,
                position: 'top right',
                parent: '#content'
            });
        }

        function irFactura() {
            $state.go('triangular.payment_factura', {pago: JSON.stringify(vm.pago)})
        }
    }
})();