  define(['knockout', 'ojs/ojbootstrap'], 
      
      function (ko, Bootstrap)
      {
        
        function CodebookModel(){
            var self = this;
            
            this.render = function(){
                this.renderTable();
            };
            
            
            this.renderTable = function(){
              require([CustomRegistry.CRUDTable.viewmodel, CustomRegistry.CRUDTable.view], function (viewModel, view) {
                    var template = _.template(view);
                    var node = document.getElementById("codebook-table");
                    $(node).html(template);
                    ko.cleanNode(node);
                    var vm = new viewModel();
                    ko.applyBindings(vm, node);
                    var table = document.getElementById('table');
                    table.addEventListener('currentRowChanged', vm.currentRowListener);
                });  
            };
            
            this.render();  
        }
        
        return CodebookModel;
        
      });