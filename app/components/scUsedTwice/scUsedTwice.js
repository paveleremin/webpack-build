const angular = require('angular');

const scUsedTwice = {
    template: require('./scUsedTwice.html'),
    controller() {}
};

module.exports = angular
    .module('sc.components.scUsedTwice', [])
    .component('scUsedTwice', scUsedTwice)
    .name;
