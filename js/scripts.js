$(document).ready(function() {
$("form#form1").submit(function(event){
  event.preventDefault();
  const userNumber = parseInt($("#input").val());
  

  $("#output").text(output);
  });
});