 define(['knockout', 'ojs/ojbootstrap', 'ojs/ojvalidation-base',
          'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojinputnumber',
          'ojs/ojradioset', 'ojs/ojcheckboxset', 
          'ojs/ojselectcombobox',
          'ojs/ojdatetimepicker', 'ojs/ojswitch', 'ojs/ojslider',
          'ojs/ojcolorspectrum', 'ojs/ojcolorpalette', 'ojs/ojlabel', 
          'ojs/ojformlayout'],
            function(ko, Bootstrap, ValidationBase)
            {
              function customEbillViewModel() {
                var self = this;
                this.labelEdge = ko.observable('start');
                this.direction = ko.observable('column');
                this.maxColumnsString = ko.observable('1');
                this.maxColumns = ko.computed(function () {
                  return parseInt(this.maxColumnsString());
                }.bind(this));
                this.formState = ko.observable('enabled');
                this.booleans = ko.observableArray([]);

                this.placeholder = ko.computed(function () {
                  return this.booleans.indexOf("placeholder") != -1;
                }.bind(this));
                this.required = ko.computed(function () {
                  return this.booleans.indexOf("required") != -1;
                }.bind(this));
                this.definition = ko.computed(function () {
                  return this.booleans.indexOf("definition") != -1? "Custom help definition" : "";
                }.bind(this));
                this.source = ko.computed(function () {
                  return this.booleans.indexOf("source") != -1 ? "http://www.oracle.com" : "";
                }.bind(this));
                this.instruction = ko.computed(function () {
                  return this.booleans.indexOf("instruction") != -1? "Assistive help instruction" : "";
                }.bind(this));
                this.checkboxValue = ko.observableArray(["blue"]);
                this.agreeValue = ko.observableArray(["agree"]);
                this.radioValue = ko.observable("blue");
                this.disableFormControls = ko.computed(function () {
                  if (this.formState() == 'disabled')
                    return true;
                  else
                    return false;
                }.bind(this));

                this.readonlyFormControls = ko.computed(function () {
                  if (this.formState() == 'readonly')
                    return true;
                  else
                    return false;
                }.bind(this));


                this.formControls = ko.observableArray([]);
                this.messages = ko.observableArray([]);
                var _errorMsg = {summary: 'Error'};
                var _warningMsg = {summary: 'Warning', severity: 'warning'};
                var _infoMsg = {summary: 'Info', severity: 'info'};
                var _confirmationMsg = {summary: 'Confirmation', severity: 'confirmation'};

                this.messages = ko.computed(function () {
                  var msgs = [];

                  if (this.formState() == 'enabled')
                  { 
                    if (this.formControls.indexOf('error') > -1)
                    {
                      msgs.push(_errorMsg);
                    }
                    if (this.formControls.indexOf('warning') > -1)
                    {
                      msgs.push(_warningMsg);
                    }
                    if (this.formControls.indexOf('info') > -1)
                    {
                      msgs.push(_infoMsg);
                    }
                    if (this.formControls.indexOf('confirmation') > -1)
                    {
                      msgs.push(_confirmationMsg);
                    }
                  }

                  return msgs;
                }.bind(this));

                this.isoDate = ko.observable(ValidationBase.IntlConverterUtils.dateToLocalIso(new Date()));
                this.isoTime = ko.observable(ValidationBase.IntlConverterUtils.dateToLocalIso(new Date()));

                this.colorSpectrumValue = new oj.Color('rgba(21,0,255,0.8)');
                this.colorPaletteValue = ko.observable(oj.Color.RED);
                this.colorPickerPalette = [
                  {"color": new oj.Color("#000000")},
                  {"color": new oj.Color("#c0c0c0")},
                  {"color": new oj.Color("#808080")},
                  {"color": new oj.Color("#ffffff")},
                  {"color": new oj.Color("#800000")},
                  {"color": new oj.Color("#ff0000")},
                  {"color": new oj.Color("#800080")},
                  {"color": new oj.Color("#ff00ff")},
                  {"color": new oj.Color("#008000")},
                  {"color": new oj.Color("#00ff00")},
                  {"color": new oj.Color("#808000")},
                  {"color": new oj.Color("#ffff00")},
                  {"color": new oj.Color("#000080")},
                  {"color": new oj.Color("#0000ff")},
                  {"color": new oj.Color("#008080")},
                  {"color": new oj.Color("#00ffff")}
                ];

            }
              /*$(
                 function()
                 {
                   ko.applyBindings(new StateModel(),
                                document.getElementById('form-container'));
                 }
              );
              */
              /*   Bootstrap.whenDocumentReady().then(function() {
                        ko.applyBindings(new customEbillViewModel(), document.getElementById('form-container'));
                    });
             */
             return customEbillViewModel;
            });