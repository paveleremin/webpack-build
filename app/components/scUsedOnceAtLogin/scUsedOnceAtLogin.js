const angular = require('angular');

const scUsedOnceAtLogin = {
    template: require('./scUsedOnceAtLogin.html'),
    controller() {}
};

module.exports = angular
    .module('sc.components.scUsedOnceAtLogin', [])
    .component('scUsedOnceAtLogin', scUsedOnceAtLogin)
    .name;
