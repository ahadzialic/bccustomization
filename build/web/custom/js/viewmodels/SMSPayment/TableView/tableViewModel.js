  define(['knockout', 'ojs/ojbootstrap'], 
      
      function (ko, Bootstrap)
      {
        
        function TableModel(){
            var self = this;
            
            this.render = function(){
                this.renderDatePickers();
                this.renderSearch();
                this.renderSecondaryNavigation();
            };
            
            
            this.renderDatePickers = function(){
              require([CustomRegistry.datePicker.viewmodel, CustomRegistry.datePicker.view], function (viewModel, view) {
                    var template = _.template(view);
                    var node = document.getElementById("date-picker-component");
                    $(node).html(template);
                    ko.cleanNode(node);
                    var vm = new viewModel();
                    ko.applyBindings(vm, node);
                });  
            };
              this.renderSearch = function(){
              require([CustomRegistry.search.viewmodel, CustomRegistry.search.view], function (viewModel, view) {
                    var template = _.template(view);
                    var node = document.getElementById("search-component");
                    $(node).html(template);
                    ko.cleanNode(node);
                    var vm = new viewModel();
                    ko.applyBindings(vm, node);

                });  
            };
            
            this.renderSecondaryNavigation = function(){
              require([CustomRegistry.secondaryNavigationBar.viewmodel, CustomRegistry.secondaryNavigationBar.view], function (viewModel, view) {
                    var template = _.template(view);
                    var node = document.getElementById("secondary-navigation");
                    $(node).html(template);
                    ko.cleanNode(node);
                    var vm = new viewModel();
                    ko.applyBindings(vm, node);
                });  
            };
            this.render();  
        }
        
        return TableModel;
        
      });