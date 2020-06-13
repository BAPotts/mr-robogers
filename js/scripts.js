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
      let stringRangeArray = makeRangeArray(inputNum);
      let outputArray = replaceOneDigit(stringRangeArray);
      $("#output").text(outputArray);
     } 
  });
});

function makeRangeArray(inputNum){
  
  let rangeArray = [];
  for (let i = 0; i <= inputNum; i++){
    rangeArray[i] = i;
  }
  let stringRangeArray = rangeArray.map(function(element){
    return element.toString();
  });
  return stringRangeArray;
}

function replaceOneDigit(stringArray){

  for (let i = 0; i<stringArray.length; i++){
     for (let j = 0; j<stringArray[i].length; j++){
      if (stringArray[i].charAt(j)=== "1"){
        stringArray[i] = "Beep!";
      }
    }
  }
  return stringArray;
}

