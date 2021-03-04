  define(['knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojinputtext', 'ojs/ojbutton'],
  function(ko, Bootstrap, ArrayDataProvider)
  {   
    function viewModel()
    { 
      this.sizeRadios = [
          {id: 'sizeTen', label: '10'},
          {id: 'sizeHundred', label: '100'},
          {id: 'sizeThousand',   label: '1000'},
          {id: 'sizeTenThousand',   label: '10000'}
      ];
      this.size = ko.observable('sizeTen');
      this.filter = ko.observable();
  
      var dataSource = [{DepartmentId: '01', DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
          {DepartmentId: '20', DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
          {DepartmentId: '30', DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
          {DepartmentId: '40', DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
          {DepartmentId: '50', DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
          {DepartmentId: '60', DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
          {DepartmentId: '70', DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
          {DepartmentId: '80', DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
          {DepartmentId: '90', DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
          {DepartmentId: '10', DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300}];
  
      this.dataprovider = new ko.observable(new ArrayDataProvider(dataSource, {keyAttributes: 'DepartmentId'}));
      this.highlightChars = [];
      
      this.handleValueChanged = function()
      {
          this.highlightChars = [];
          var filter = document.getElementById('filter').rawValue;
          if (filter.length == 0)
          {
              this.clearClick();
              return;
          }
          var deptArray = [];
          var i, id;
          for (i = dataSource.length - 1; i >= 0; i--)
          {
              id = dataSource[i].DepartmentId;
              Object.keys(dataSource[i]).forEach(function(field) 
              {
                  if (dataSource[i][field].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0)
                  {
                      this.highlightChars[id] = this.highlightChars[id] || {};
                      this.highlightChars[id][field] = getHighlightCharIndexes(filter, dataSource[i][field]);
                      if (deptArray.indexOf(dataSource[i]) < 0)
                      {
                          deptArray.push(dataSource[i]);
                      }
                  }
              }.bind(this));
          }
          deptArray.reverse();
          this.dataprovider(new ArrayDataProvider(deptArray, {keyAttributes: 'DepartmentId'}));
          
          function getHighlightCharIndexes(highlightChars, text)
          {
              var highlightCharStartIndex = text.toString().toLowerCase().indexOf(highlightChars.toString().toLowerCase());
              return {startIndex: highlightCharStartIndex, length: highlightChars.length};
          };
      }.bind(this);
  
      this.clearClick = function(event){
          this.filter('');
          this.dataprovider(new ArrayDataProvider(dataSource, {keyAttributes: 'DepartmentId'}));
          this.highlightChars = [];
          document.getElementById('filter').value = "";
          return true;
      }.bind(this);
  
      this.highlightingCellRenderer = function(context) 
      {
          var id = context.row.DepartmentId;
          var startIndex = null;
          var length = null;
          var field = null;
          if (context.columnIndex === 0)
          {
              field = 'DepartmentId';
          }
          else if (context.columnIndex === 1)
          {
              field = 'DepartmentName';
          }
          else if (context.columnIndex === 2)
          {
              field = 'LocationId';
          }
          else if (context.columnIndex === 3)
          {    
              field = 'ManagerId';
          }
          var data = context.row[field].toString();
          if (this.highlightChars[id] != null &&
              this.highlightChars[id][field] != null)
          {
              startIndex = this.highlightChars[id][field].startIndex;
              length = this.highlightChars[id][field].length;
          }
          if (startIndex != null &&
              length != null)
          {
              var highlightedSegment = data.substr(startIndex, length);
              data = data.substr(0, startIndex) + '<b>' + highlightedSegment + '</b>' + data.substr(startIndex + length, data.length - 1);
          }
          context.cellContext.parentElement.innerHTML = data;
      }.bind(this);
  
      this.columnArray = [{headerText: 'Department Id', 
                           renderer: this.highlightingCellRenderer},
                          {headerText: 'Department Name', 
                           renderer: this.highlightingCellRenderer},
                          {headerText: 'Location Id', 
                           renderer: this.highlightingCellRenderer},
                          {headerText: 'Manager Id', 
                           renderer: this.highlightingCellRenderer}];
    }
    
    return viewModel;

  });