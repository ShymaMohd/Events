                    var radioBchecked ;
                     var checkboxesChecked = [];  
                       window.onload = function() {
                         

    // Add an event listener for form submissions
    document.getElementById('contactForm').addEventListener('submit', function() {
      // Get the value of the name field.
      var name = document.getElementById('firstname').value;
      var select = document.getElementById('subject').value;
         var des = document.getElementById('des').value;
     
        
        
      localStorage.setItem('u1', name);
      localStorage.setItem('u2', select);
      localStorage.setItem('u3', checkboxesChecked);
      localStorage.setItem('u4', radioBchecked);
      localStorage.setItem('u5', des);
    
    
    });
  

}
                       
                       function checkbox(){
  
  var checkboxes = document.getElementsByName('vehicle');
  checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
     }
  }
 

}
                 
     
    function radiobutton(){
        
        if(document.getElementById("r1").checked){
            
         radioBchecked = document.getElementById("r1").value;}
           if(document.getElementById("r2").checked){
            
         radioBchecked = document.getElementById("r2").value;  
 
     }
    }