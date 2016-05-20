(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router', 'permission',
            'triangular',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'angularMoment', 'md.data.table',
            // 'seed-module',
            // uncomment above to activate the example seed module
            // 'app.translate',
            // only need one language?  if you want to turn off translations
            // comment out or remove the 'app.translate', line above
            'app.modules', 'restangular'
        ])

        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://triangular-api.oxygenna.com/'
        });
})();
