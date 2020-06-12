$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    const inputString = $("#input").val();
    const stringArray = inputString.split("");
    const numberArray = stringArray.map(function(element) {
      return parseInt(element);
    });
    
    $("#output").text(numberArray);
    
   // if(!Number.isInteger(userNumber)){
     // $("#output").text("Please enter a numeral");
   // }else {
      //$("#output").text("This is a number");
   // } 
  });
});

