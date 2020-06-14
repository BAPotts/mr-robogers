$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    const inputString = $("#input").val();
    const inputNumber = parseInt(inputString);
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
      let stringRangeArray = makeRangeArray(inputNumber);
      let outputArray = makeRobotArray(stringRangeArray);
      $("#output").text(outputArray);
    } 
  });
});

function makeRangeArray(inputNumber){
  
  let rangeArray = [];
  for (let i = 0; i <= inputNumber; i++){
    rangeArray[i] = i;
  }
  let stringRangeArray = rangeArray.map(function(element){
    return element.toString();
  });
  return stringRangeArray;
}

function makeRobotArray(stringArray){
  for (let i = 0; i<stringArray.length; i++){
    if (stringArray[i].includes("3")){
      stringArray[i] = "Won't you be my neighbor?";
    }else if (stringArray[i].includes("2")){
      stringArray[i] = "Boop!";
    }else if (stringArray[i].includes("1")){
      stringArray[i] = "Beep!";
    }
  }
  return stringArray;
}
