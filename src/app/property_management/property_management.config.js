(function() {
    'use strict';

    angular
        .module('property_management')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.admin-default.property_management', {
                url: '/contract_management',
                templateUrl: 'app/property_management/property_management.tmpl.html'
            })
            .state('triangular.admin-default.property_management.new_property', {
                url: '/contract_management/new_property',
                templateUrl: 'app/property_management/new_property/new_property.tmpl.html',
                // set the controller to load for this page
                controller: 'NewPropertyController',
                controllerAs: 'vm'
            })
            .state('triangular.admin-default.property_management.show_propertys',{
                url: '/contract_management/show_propertys',
                templateUrl: 'app/property_management/show_propertys/show_property.tmpl.html',
                // set the controller to load for this page
                controller: 'ShowPropertyController',
                controllerAs: 'vm'
            })
            ;

        triMenuProvider.addMenu({
            name: 'Gestion de propiedades',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Nueva propiedad',
                state: 'triangular.admin-default.property_management.new_property',
                type: 'link'
            }, {
                name: 'Mostrar propiedades',
                state: 'triangular.admin-default.property_management.show_propertys',
                type: 'link'
            }]
        });
    }
})();
