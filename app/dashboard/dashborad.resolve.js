const resolve = {
    dashboard($q, $ocLazyLoad) {
        /*ngInject*/
        return $q((resolve) => {
            require.ensure([], (require) => {
                const name = require('./dashboard.module');
                $ocLazyLoad.load({ name });
                resolve(name);
            }, 'dashboard');
        });
    }
};

module.exports = resolve;
