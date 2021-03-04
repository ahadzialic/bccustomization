  define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojselectcombobox'],
  function(oj, ko, $)
  {   

        function filesModel() {
            
              var self=this;
  	      self.val = ko.observable('');
  	  }
        return filesModel;

      
  });

