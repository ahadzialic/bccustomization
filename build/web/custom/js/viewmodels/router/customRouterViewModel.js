define(['viewmodels/router/RouterViewModel',
    'jquery',
    'hashrouter',
    '../router/customRouterHelper',
    'routers/RouterHelper',
    'plugins',
    'signals',
    'gridPlugins'
], function (routerViewModel, $, hashrouter, customRouterHelper, routerHelper) {
    function customRouterViewModel() {
        routerViewModel.apply(this, arguments);
        var self = this;
        var super_initialize = self.initialize;
        self.initialize = function () {
            super_initialize();
            // handler function for opening custom page 
            hashrouter.add({
                order: 0,
                name: 'EBill',
                route: 'EBill',
                openFunc: customRouterHelper.openEBill
            });
            hashrouter.add({
                order: 0,
                name: 'SMS-payment',
                route: 'SMS-payment',
                openFunc: customRouterHelper.openSMSPayment
            });
            hashrouter.add({
                order: 0,
                name: 'OPA',
                route: 'OPA',
                openFunc: customRouterHelper.openOPA
            });
        };
    }
    customRouterViewModel.prototype = new routerViewModel();
    return customRouterViewModel;
});
