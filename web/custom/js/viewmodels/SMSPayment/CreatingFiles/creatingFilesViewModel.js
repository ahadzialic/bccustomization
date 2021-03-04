  define(['knockout', 'ojs/ojbootstrap'], 
      
      function (ko, Bootstrap)
      {
        
        function FilesModel(){
            var self = this;
            
            this.render = function(){
                this.renderOrdersFiles();
            };
            
            
            this.renderOrdersFiles = function(){
              require([CustomRegistry.OrdersFiles.viewmodel, CustomRegistry.OrdersFiles.view], function (viewModel, view) {
                    var template = _.template(view);
                    var node = document.getElementById("creating-files");
                    $(node).html(template);
                    ko.cleanNode(node);
                    var vm = new viewModel();
                    ko.applyBindings(vm, node);
                });  
            };

            this.render();  
        }
        
        return FilesModel;
        
      });

