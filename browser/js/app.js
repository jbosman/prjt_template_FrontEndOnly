'use strict';
let app = angular.module('NeedToRenameMe', ['ui.router', 'ui.bootstrap']); // eslint-disable-line no-undef

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
});
