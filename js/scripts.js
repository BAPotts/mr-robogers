$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    const inputString = $("#input").val();
    const inputNum = parseInt(inputString);
    const stringArray = inputString.split("");
    const userArray = stringArray.map(function(element) {
      return parseInt(element);
    });
    
    let isInt = true;
    for (const digit of userArray) {
      if(!Number.isInteger(digit)){
        isInt = false;
        $("#output").text("Enter an integer");  
      }
    }

     if (isInt){   
      let rangeOutputArray = makeRangeArray(inputNum);
      $("#output").text(rangeOutputArray);
     }

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