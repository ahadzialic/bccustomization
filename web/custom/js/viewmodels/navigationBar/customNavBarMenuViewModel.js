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
    function CustomNavBarMenuViewModel() {
          var self = this;
          this.selectedItem = ko.observable("SMSPaymentTables");
          
         this.navigateTo = function(data, event) {
                //data.selectedItem() se kasnije azurira, tako da imamo u ovom trenutku staru vrijednost, a ne onu na koju prelazimo
                //ako je kliknuto na istu
                if(data.selectedItem() === event.currentTarget.id) return;
                if(event.currentTarget.id === "SMSPaymentTables"){
                    this.renderSMSPaymentTables();
                }
                else if(event.currentTarget.id === "mCommerceFiles"){
                     this.rendermCommerceFiles();                   
                }
                else
                    this.renderCodebook();

         };
        this.render = function () {
              this.renderSMSPaymentTables();            
        };
        

        this.renderSMSPaymentTables = function () {
            require([CustomRegistry.eBill.viewmodel, CustomRegistry.eBill.view], function (viewModel, view) {
                var template = _.template(view);
                var node = document.getElementById("custom-page-main-content");
                $(node).html(template);
                ko.cleanNode(node);
                var vm = new viewModel();
                //vm.initialize();
                ko.applyBindings(vm, node);
            });
        };
        this.rendermCommerceFiles = function(){
          require([CustomRegistry.SMSPayment.viewmodel, CustomRegistry.SMSPayment.view], function (viewModel, view) {
                var template = _.template(view);
                var node = document.getElementById("custom-page-main-content");
                $(node).html(template);
                ko.cleanNode(node);
                var vm = new viewModel();
                //vm.initialize();
                ko.applyBindings(vm, node);
            });  
        };
        this.renderCodebook = function(){
            require([CustomRegistry.styleLab.viewmodel, CustomRegistry.styleLab.view], function (viewModel, view) {
                var template = _.template(view);
                var node = document.getElementById("custom-page-main-content");
                $(node).html(template);
                ko.cleanNode(node);
                var vm = new viewModel();
                //vm.initialize();
                ko.applyBindings(vm, node);
            });  
        };

        this.render();
    }
    

    /*Bootstrap.whenDocumentReady().then(function() {
        ko.applyBindings(new CustomNavBarMenuViewModel(), document.getElementById('tabbardemo'));
    });
    */
    
    return CustomNavBarMenuViewModel;
  }
  );