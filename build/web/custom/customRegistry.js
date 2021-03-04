/*
 Copyright (c) 2015, Oracle and/or its affiliates. All rights reserved.
 */

//Global registry that provides the names of views, models that make up the
//application.
// Registry file which is used to load the dependencies in a dynamic way
// It avoids the hard-coded path inclusion of the various dependencies in the files

//The idea is that the application provides a default configuration which can be
//overwritten via the SDK.  Customers may want to provide a completely different
//view on the view model or they may subclass
//a view model to alter the logic and/or provide additional properties.  The
//customer would likely specify their custom artefacts in a separate configuration
//that would be merged in the mid-tier (REST). This merged registry would then
//be retrieved by the UI and used when dynamically loading elements using
//require.js


// if it is a HTML view : address it as a 'view'
// if it is a viewmodel : address it as a 'viewmodel'
// if it is a validator : address it as a 'validator'
// if it is a bindings : address it as a 'bindings'
// if any artifact is having more than one view/viewmodel/binding/validator : address it by differentiating by suffixing with 'view/viewmodel/binding/validator' to the name



var CustomRegistry = {
    landingPageView: {
        viewExtension: 'text!custom/../../custom/templates/home/landingPageExtensionView.html',
        viewmodel: '../custom/js/viewmodels/home/LandingPageExtensionViewModel'
    },
    router: {
        viewmodel: '../custom/js/viewmodels/router/customRouterViewModel'
    },
    eBillFullPage: {
        view: 'text!../custom/templates/fullPage/eBillFP/eBillView.html',
        viewmodel: '../custom/js/viewmodels/fullPage/eBillFP/eBillFPViewModel'
    },
    SMSPaymentFullPage: {
        view: 'text!../custom/templates/fullPage/SMSPaymentFP/SMSPaymentView.html',
        viewmodel: '../custom/js/viewmodels/fullPage/SMSPaymentFP/SMSPaymentFPViewModel'
    },
    OPAFullPage: {
        view: 'text!../custom/templates/fullPage/OPAFP/OPAView.html',
        viewmodel: '../custom/js/viewmodels/fullPage/OPAFP/OPAFPViewModel'
    },
    customFullPage: {
        view: 'text!../custom/templates/customFullPage/customFullPageView.html',
        viewmodel: '../custom/js/viewmodels/customFullPage/customFullPageViewModel'
    },
    navigationBar: {
        view: 'text!../custom/templates/navigationBar/customNavBarMenuView.html',
        viewmodel: '../custom/js/viewmodels/navigationBar/customNavBarMenuViewModel'
    },
    eBill: {
        view: 'text!../custom/templates/eBill/customEBillView.html',
        viewmodel: '../custom/js/viewmodels/eBill/customEBillViewModel'
    },
    SMSPayment: {
        view: 'text!../custom/templates/SMSPayment/SMSPaymentView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/SMSPaymentViewModel'
    },
    styleLab: {
        view: 'text!../custom/templates/styleLab/StyleLabView.html',
        viewmodel: '../custom/js/viewmodels/styleLab/StyleLabViewModel'
    },
    SMSPaymentTables: {
        view: 'text!../custom/templates/SMSPayment/TableView/tableView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/TableView/tableViewModel'
    },
    Files: {
        view: 'text!../custom/templates/SMSPayment/CreatingFiles/creatingFilesView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/CreatingFiles/creatingFilesViewModel'
    },    
    OrdersFiles: {
        view: 'text!../custom/templates/SMSPayment/CreatingFiles/OrdersFiles/ordersFilesView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/CreatingFiles/OrdersFiles/ordersFilesViewModel'
    },
    Codebook: {
        view: 'text!../custom/templates/SMSPayment/Codebook/codebookView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/Codebook/codebookViewModel'
    },
    CRUDTable:{
        view: 'text!../custom/templates/SMSPayment/Codebook/CRUDTable/remailLocationView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/Codebook/CRUDTable/remailLocationViewModel'
    },
    datePicker: {
        view: 'text!../custom/templates/SMSPayment/TableView/DatePickers/DatePickersView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/TableView/DatePickers/DatePickersViewModel'
    },
    search: {
        view: 'text!../custom/templates/SMSPayment/TableView/Search/SearchView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/TableView/Search/SearchViewModel'
    },
    secondaryNavigationBar: {
        view: 'text!../custom/templates/SMSPayment/TableView/Tables/TablesView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/TableView/Tables/TablesViewModel'
    },
    SMSNavigationBar: {
        view: 'text!../custom/templates/SMSPayment/Navigation/customNavBarMenuView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/Navigation/customNavBarMenuViewModel'
    },
    CheckReference:{
        view: 'text!../custom/templates/SMSPayment/TableView/Tables/CheckReference/CheckReferenceView.html',
        viewmodel: '../custom/js/viewmodels/SMSPayment/TableView/Tables/CheckReference/CheckReferenceViewModel'
    }
};
