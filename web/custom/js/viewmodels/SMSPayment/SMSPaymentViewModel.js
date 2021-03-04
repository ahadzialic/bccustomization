define(['knockout', 'ojs/ojbootstrap', 'ojs/ojvalidation-base', 'ojs/ojknockout', 'ojs/ojdatetimepicker',
               'ojs/ojselectcombobox', 'ojs/ojtimezonedata', 'ojs/ojlabel'], 
  function(ko, Bootstrap, ValidationBase)
  {
      function viewModel()
      {
         this.value = ko.observable(ValidationBase.IntlConverterUtils.dateToLocalIso(new Date(2021, 1, 1)));
         this.value1 = ko.observable(ValidationBase.IntlConverterUtils.dateToLocalIso(new Date(2021, 1, 1)));
      }
      return viewModel;
  });