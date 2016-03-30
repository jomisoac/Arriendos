(function() {
    'use strict';

    angular
        .module('app', [
            'triangular', 'ngCookies', 'ngSanitize',
            'ngMessages', 'ngMaterial', 'ui.router',  'LocalStorageModule',
            'angularMoment', 'md.data.table',
            'app.modules',
            // uncomment above to activate the example seed module
            //'app.examples'
        ])
        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://triangular-api.oxygenna.com/'
        });
})();
