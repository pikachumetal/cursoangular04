angular.module('appPhone', ["ngRoute", "ngMessages", 'pascalprecht.translate']).config(function ($routeProvider, $translateProvider) {
    "use strict";

    $routeProvider
        .when("/phones/list", {
            templateUrl: "app/shop/phonelist/templates/phonelist.home.template.html",
            controllerAs: 'phoneListCtrl',
            controller: "PhoneListController"
        })
        .when("/phones/detail/:id", {
            templateUrl: "app/shop/phonelist/templates/phonelist.detail.template.html",
            controllerAs: 'phoneItemCtrl',
            controller: "PhoneItemController"
        })
        .when("/phones/edit/:id", {
            templateUrl: "app/shop/phonelist/templates/phonelist.edit.template.html",
            controllerAs: 'phoneEditCtrl',
            controller: "PhoneEditController"
        })
        .otherwise({
            redirectTo: '/phones/list'
        });

    $translateProvider.translations('en', {
        TITLE: 'Hello',
        FOO: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german'
    });
    $translateProvider.translations('de', {
        TITLE: 'Hallo',
        FOO: 'Dies ist ein Paragraph.',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch'
    });
    $translateProvider.preferredLanguage('en');
});