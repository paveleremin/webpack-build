const angular = require('angular');

const dashboardStates = {
    dashboard: 'dashboard'
};

function configureRoutes($stateProvider) {
    'ngInject';

    $stateProvider.state({
        name: dashboardStates.dashboard,
        url: '/dashboard',
        component: 'scDashboard',
        resolve: require('./dashborad.resolve')
    });
}

const moduleName = angular
    .module('dashboardRoutes', [
        require('@uirouter/angularjs').default
    ])
    .config(configureRoutes)
    .name;

module.exports = {
    dashboardStates,
    moduleName
};
