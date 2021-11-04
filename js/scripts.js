$(document).ready(function() {
  $("form#animal-form").submit(function(event) {
    event.preventDefault();
    const animal = $("#animal-select").val();
  

    if (animal === "Turtle") {
      $('#content').hide();
      $('#turtle-div').show();
    } else if (animal === "Snake") {
      $('#content').hide();
      $('#snake-div').show();
    } else {
      $('#content').hide();
      $('#insect-div').show();
    }  
  });
});