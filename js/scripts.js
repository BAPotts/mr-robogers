$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    const inputString = $("#input").val();
    const inputNum = parseInt(inputString);
    const stringArray = inputString.split("");
    const userArray = stringArray.map(function(element) {
      return parseInt(element);
    });
    
    
    for (const digit of userArray) {
      if(!Number.isInteger(digit)){
        $("#output").text("Enter an integer");
        break;
      }else {let rangeOutputArray = makeRangeArray(inputNum);
      }
    }
        
    

    $("#output").text(rangeOutputArray);

    //$("#output").text(numberArray);
    
   // if(!Number.isInteger(userNumber)){
     // $("#output").text("Please enter a numeral");
   // }else {
      //$("#output").text("This is a number");
   // } 
  });
});

function  makeRangeArray(inputNum){
  
  let rangeArray = [];
  for (let i = 0; i <= inputNum; i++){
    rangeArray[i] = i;
  }
  return rangeArray;
}