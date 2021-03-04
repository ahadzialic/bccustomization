define(['jquery', 'knockout'], function ($, ko) {
    var customRouterHelper = {
        openEBill: function () {
            require(['underscore', CustomRegistry.eBillFullPage.view,
                CustomRegistry.eBillFullPage.viewmodel
            ], function (_, view, viewModel) {
                var template = _.template(view);

                // DOM Node on index.html which will hold this view 
                $("#paymentSuspenseSearchContent").append(template);
                var vm = new viewModel();
                ko.cleanNode(document.getElementById('paymentSuspenseSearchContent'));
                ko.applyBindings(vm,
                        document.getElementById("paymentSuspenseSearchContent"));

                // Hide view of landing page before custom full page is loaded
                $('#landingPageContent').empty();
                $("#paymentSuspenseSearchContent").show();
            });
        },
        openSMSPayment: function () {
            require(['underscore', CustomRegistry.SMSPaymentFullPage.view,
                CustomRegistry.SMSPaymentFullPage.viewmodel
            ], function (_, view, viewModel) {
                var template = _.template(view);

                // DOM Node on index.html which will hold this view 
                $("#paymentSuspenseSearchContent").append(template);
                var vm = new viewModel();
                ko.cleanNode(document.getElementById('paymentSuspenseSearchContent'));
                ko.applyBindings(vm,
                        document.getElementById("paymentSuspenseSearchContent"));

                // Hide view of landing page before custom full page is loaded
                $('#landingPageContent').empty();
                $("#paymentSuspenseSearchContent").show();
            });
        },
        openOPA: function () {
            require(['underscore', CustomRegistry.OPAFullPage.view,
                CustomRegistry.OPAFullPage.viewmodel
            ], function (_, view, viewModel) {
                var template = _.template(view);

                // DOM Node on index.html which will hold this view 
                $("#paymentSuspenseSearchContent").append(template);
                var vm = new viewModel();
                ko.cleanNode(document.getElementById('paymentSuspenseSearchContent'));
                ko.applyBindings(vm,
                        document.getElementById("paymentSuspenseSearchContent"));

                // Hide view of landing page before custom full page is loaded
                $('#landingPageContent').empty();
                $("#paymentSuspenseSearchContent").show();
            });
        }
    };
    return customRouterHelper;
});