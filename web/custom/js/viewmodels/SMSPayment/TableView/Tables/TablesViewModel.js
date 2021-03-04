  define([
  'knockout',
  'ojs/ojbootstrap',
  'ojs/ojknockout',
  'ojs/ojnavigationlist',
  'ojs/ojradioset',
  'ojs/ojswitch'
  ],
  function(ko, Bootstrap)
  // this callback gets executed when all required modules are loaded
  {
      function ViewModel() {
          this.selectedItem = ko.observable("check-reference");

          this.navigateTo = function(data, event) {
                //data.selectedItem() se kasnije azurira, tako da imamo u ovom trenutku staru vrijednost, a ne onu na koju prelazimo
                //ako je kliknuto na istu
                if(data.selectedItem() === event.currentTarget.id) return;
                
                if(event.currentTarget.id === "check-reference"){
                    this.renderCheckRef();
                }
                else if(event.currentTarget.id === "orders"){
                     this.renderOrders();                   
                }
                else if(event.currentTarget.id === "order-confirmation"){
                     this.renderOrderConfirm();                   
                }          
         };
        this.render = function () {
              this.renderCheckRef();            
        };
        
        this.renderCheckRef = function(){
          require([CustomRegistry.CheckReference.viewmodel, CustomRegistry.CheckReference.view], function (viewModel, view) {
                var template = _.template(view);
                var node = document.getElementById("mainContent");
                $(node).html(template);
                ko.cleanNode(node);
                var vm = new viewModel();
                ko.applyBindings(vm, node);
            });  
        };
        
        this.renderOrders = function(){
          require([CustomRegistry.CheckReference.viewmodel, CustomRegistry.CheckReference.view], function (viewModel, view) {
                var template = _.template(view);
                var node = document.getElementById("mainContent");
                $(node).html(template);
                ko.cleanNode(node);
                var vm = new viewModel();
                ko.applyBindings(vm, node);
            });  
        };
        
        this.renderOrderConfirm = function(){
          require([CustomRegistry.CheckReference.viewmodel, CustomRegistry.CheckReference.view], function (viewModel, view) {
                var template = _.template(view);
                var node = document.getElementById("mainContent");
                $(node).html(template);
                ko.cleanNode(node);
                var vm = new viewModel();
                ko.applyBindings(vm, node);
            });  
        };
        
        this.render();
      }
      
       return ViewModel;
  });