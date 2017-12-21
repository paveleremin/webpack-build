const angular = require('angular');

module.exports = angular
    .module('login', [
        // USED ONCE
        require('../components/scUsedOnceAtLogin/scUsedOnceAtLogin'),
        require('../vendor/chrome-autofill-fix'),

        // USED TWICE
        require('../components/scUsedTwice/scUsedTwice'),
        require('../vendor/angular-debounce'),
    ])
    .component('scLogin', require('./scLogin/scLogin'))
    .name;
