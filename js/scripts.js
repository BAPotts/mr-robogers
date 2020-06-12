$(document).ready(function() {
$("form#form1").submit(function(event){
  event.preventDefault();
  const userNumber = parseInt($("#input").val());
  
  const output = integerIdentifier(userNumber);

  $("#output").text(output);
  });
});

function integerIdentifier(userNumber){
  if(Number.isInteger(userNumber)){
    return "true";
  } else {
    return "false";
  }
}