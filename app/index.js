require('babel-polyfill');

const angular = require('angular');

const appModules = [
    // GLOBAL VENDORS
    require('ocLazyLoad'),

    // LOADING ONDEMAND
    require('./login/login.routes').moduleName,
    require('./dashboard/dashboard.routes').moduleName
];

angular.module('app', appModules);
