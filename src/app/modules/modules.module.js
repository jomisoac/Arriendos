(function() {
    'use strict';

    angular
        .module('app.modules', [
            'app.modules.client_management',
            'app.modules.contract_management',
            'app.modules.property_management',
            'app.modules.payment_management',
        ]);
})();