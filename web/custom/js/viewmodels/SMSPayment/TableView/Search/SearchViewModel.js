define(['knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojinputtext', 
      'ojs/ojinputnumber', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojvalidationgroup','ojs/ojtable', 'promise'],
  function(ko, Bootstrap, ArrayDataProvider)
  {   
    function crudModel()
    {
        var self=this;
        self.data = ko.observableArray();
        var urlToPost = baseURL + "/sampleservice/welcome";
        $.ajax({
                        url: urlToPost,
                        type: 'GET',
                        dataType: "json",
                        processData: false,
                        async: false,
                        contentType: "application/json",
                        beforeSend: function(e){
                            util.setRequestHeader(e)
                        }
                    })
                .then(function (response) {
                        $.each(response, function () {
                            self.data.push({
                                CA_ID: this.CA_ID,
                                ID: this.ID,
                                IME: this.IME,
                                MSISDN: this.MSISDN,
                                PREZIME: this.PREZIME,
                                REFERENCA_RACUNA: this.REFERENCA_RACUNA,
                                SIFRA_TEHNOLOGIJE: this.SIFRA_TEHNOLOGIJE,
                                TRANSACTION_ID: this.TRANSACTION_ID,
                                WS_RESPONSE: this.WS_RESPONSE
                            });
                        });
        });
        self.dataSource(new oj.ArrayTableDataSource(self.data, {idAttribute: 'ID'}));
/*
                var deptArray = [{ CA_ID: '12345678', ID: 10, IME: 'ADNA', MSISDN: '062551688', PREZIME: 'Hadzialic', REFERENCA_RACUNA: '123', SIFRA_TEHNOLOGIJE: '4', TRANSACTION_ID: 5, WS_RESPONSE: 'OK'},
                                 { CA_ID: '12345678', ID: 11, IME: 'ADNA', MSISDN: '062551688', PREZIME: 'Hadzialic', REFERENCA_RACUNA: '123', SIFRA_TEHNOLOGIJE: '4', TRANSACTION_ID: 5, WS_RESPONSE: 'OK'}];

                var self = this;
                self.dataSourceForChildren = ko.observable();
                self.loadData = ko.observable(false);              

                self.render = function () {
                    
                    self.loadData(true);                  
                    var urlToPost = baseURL + "/sampleservice/welcome";
                    
                    return $.ajax({
                        url: urlToPost,
                        type: 'GET',
                        dataType: "json",
                        processData: false,
                        async: false,
                        contentType: "application/json",
                        beforeSend: function(e){
                            util.setRequestHeader(e)
                        }
                    }).done(function (response) {
                        
                        //response array to be loaded into the variable data which is the data source for ojArrayTable
                        deptArray = response;
                        self.dataSourceForChildren(new oj.ArrayTableDataSource(deptArray, {idAttribute: "ID"}));                      
                    }).fail(function (errorThrown) {
                        console.log("errorThrown");
                    });
                };
                
                self.render();
  */              



    }
     return crudModel;
  });