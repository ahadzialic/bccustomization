define(['knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojlistdataproviderview',
             'ojs/ojmessages'],
      function(ko, Bootstrap, ArrayDataProvider, ListDataProviderView) {
        function MessagesViewModel() {
          
          MessagesViewModel._SEVERITY_LEVEL = {
            error: 4,
            warning: 3,
            info: 2,
            confirmation: 1,
            none: 0
          };
          
          var messagesData = [{
              severity: 'warning',
              summary: 'Warning message summary',
              detail: 'Warning message detail'
            },
            {
              severity: 'confirmation',
              summary: 'Confirmation message summary',
              detail: 'Confirmation message detail'
            },
            {
              severity: 'error',
              summary: 'Error message summary',
              detail: 'Error message detail'
            },
            {
              severity: 'info',
              summary:  'Info message summary',
              detail:  'Info message detail'
            }];
          
          this.severityComparator = function(a, b) {
            if (a === b) {
              return 0;
            }
            
            var severityNumberA = MessagesViewModel._SEVERITY_LEVEL[a]; 
            var severityNumberB = MessagesViewModel._SEVERITY_LEVEL[b];
  
            return severityNumberA < severityNumberB ? -1 : 1;
          };
          
          var comparatorsMap = new Map();
          comparatorsMap.set('severity', this.severityComparator);
  
          this.sortCriteria = [{attribute: 'severity', direction: 'descending'}];
          this.dataprovider = new ArrayDataProvider(messagesData, 
                                                    {sortComparators:{comparators: comparatorsMap}});
          this.messagesDataprovider = new ListDataProviderView(this.dataprovider, 
                                                               {'sortCriteria': this.sortCriteria});
  
        };
  
        return MessagesViewModel;
      });