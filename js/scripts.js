$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    const inputString = $("#input").val();
    const stringArray = inputString.split("");
    const numberArray = stringArray.map(function(element) {
      return parseInt(element);
    });
    
    
    for (const digit of numberArray) {
      if(!Number.isInteger(digit)){
        $("#output").text("Enter an integer");
        break;
      }
    }
        



    //$("#output").text(numberArray);
    
   // if(!Number.isInteger(userNumber)){
     // $("#output").text("Please enter a numeral");
   // }else {
      //$("#output").text("This is a number");
   // } 
  });
});

