const angular = require('angular');

module.exports = angular
    .module('dashboard', [
        // USED TWICE
        require('../components/scUsedTwice/scUsedTwice'),
        require('../vendor/angular-debounce')
    ])
    .component('scDashboard', require('./scDashboard/scDashboard'))
    .name;
