/**
 * Created by Jose Soto
 * on 23/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.modules.payment_management')
        .controller('InvoiceController', InvoiceController)

    function InvoiceController($stateParams) {
        var vm = this;
        vm.imprimir = imprimir;

        cargarDatos();
        function cargarDatos() {
            vm.client = {};
            vm.client = jQuery.parseJSON($stateParams.pago);
        }

        function imprimir(div) {
            var printContents = document.getElementById(div).innerHTML;
            var popupWin = window.open('', '_blank');
            popupWin.document.open();
            popupWin.document.write('<html><head></head><body onload="window.print()">' + printContents + '</body></html>');
            popupWin.document.close();
        }
    }
})();
