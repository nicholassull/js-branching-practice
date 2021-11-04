$(document).ready(function() {
  $("form#animal-form").submit(function(event) {
    event.preventDefault();
   // $("#content-container").children().hide();//
    const animal = $("#animal-select").val();
  

    if (animal === "Turtle") {
      $('#turtle-div').show();
      $('#snake-div, #insect-div').hide(); 
    } else if (animal === "Snake") {
      $('#snake-div').show();
      $('#turtle-div, #insect-div').hide();
    } else {
      $('#insect-div').show();
      $('#turtle-div, #snake-div').hide();
    }  
  });
});