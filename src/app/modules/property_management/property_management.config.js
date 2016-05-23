(function() {
    'use strict';

    angular
        .module('app.modules.property_management')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.show_propertys', {
                url: '/gestion-propiedades/propiedades',
                templateUrl: 'app/modules/property_management/show_propertys/show_propertys.tmpl.html',
                // set the controller to load for this page
                controller: 'SeedPageController',
                controllerAs: 'vm'
            })
            .state('triangular.new_property', {
                url: '/gestion-propiedades/propiedades',
                templateUrl: 'app/modules/property_management/new_property/new_property.tmpl.html',
                // set the controller to load for this page
                controller: 'NewPropertyController',
                controllerAs: 'vm'
            });

        triMenuProvider.addMenu({
            name: 'Gestion de propiedades',
            icon: 'zmdi zmdi-city',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Nueva propiedad',
                state: 'triangular.new_property',
                type: 'link'
            }, {
                name: 'Mostrar propiedades',
                state: 'triangular.show_propertys',
                type: 'link'
            }]
        });
    }
})();
