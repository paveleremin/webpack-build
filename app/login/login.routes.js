const angular = require('angular');

let loginStates = {
    login: 'login'
};

function configureRoutes($stateProvider) {
    'ngInject';

    $stateProvider.state({
        name: loginStates.login,
        url: '/',
        componentn: 'scLogin',
        resolve: require('./login.resolve')
    });
}

const moduleName = angular
    .module('loginRoutes', [
        require('@uirouter/angularjs').default
    ])
    .config(configureRoutes)
    .name;

module.exports = {
    loginStates,
    moduleName
};
