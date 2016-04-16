(function() {
    'use strict';

    angular
        .module('app.modules.client_management')
        .controller('RegisterClientController', RegisterClientController);

    /* @ngInject */
    function RegisterClientController(Restangular, $mdToast) {
        var vm = this;
        vm.client = {};
         var clients = Restangular.all('clientes/');

        vm.addClient = addClient;

        function addClient() {
            clients.post(vm.client).then(function () {
                message('Se guardo correctamente !');
                vm.client = {};
            }), function () {
                message('Error al guardar !!');
            }
        }

        function message(body) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(body)
                    .hideDelay(3000)
            );
        }

    }
})();