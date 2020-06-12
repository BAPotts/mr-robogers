$(document).ready(function() {
$("form#form1").submit(function(event){
  event.preventDefault();
  const userNumber = parseInt($("#input").val());
  
   if(!Number.isInteger(userNumber)){
    $("#output").text("Please enter a numeral");
   }else {
    $("#output").text("This is a number");
   } 
});
});

