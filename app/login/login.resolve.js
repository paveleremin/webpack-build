const resolve = {
    login($q, $ocLazyLoad) {
        /*ngInject*/
        return $q((resolve) => {
            require.ensure([], (require) => {
                const name = require('./login.module');
                $ocLazyLoad.load({ name });
                resolve(name);
            }, 'login');
        });
    }
};

module.exports = resolve;
