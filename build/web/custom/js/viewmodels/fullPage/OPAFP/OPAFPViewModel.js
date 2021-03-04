define([
    'jquery',
    'knockout',
    'ojs/ojbootstrap',
  'ojs/ojknockout',
  'ojs/ojnavigationlist',
  'ojs/ojradioset',
  'ojs/ojswitch'
], function ($, ko, Bootstrap) {
    function OPAFullPageViewModel() {
        var self = this;
        self.title = 'OPA Full Page View';
        self.close = function (data, event) {
            location.hash = '';
        };

        self.render = function () {
            self.renderNavBar();
        };

        self.renderNavBar = function () {
            require([CustomRegistry.navigationBar.view, CustomRegistry.navigationBar.viewmodel], function (view, viewModel) {
                var template = _.template(view);
                var node = document.getElementById("custom-main-content");
                $(node).html(template);
                ko.cleanNode(node);
                var vm = new viewModel();
                //vm.initialize();
                ko.applyBindings(vm, node);
            });
        };
        
        self.render();
    }
    return OPAFullPageViewModel;
});