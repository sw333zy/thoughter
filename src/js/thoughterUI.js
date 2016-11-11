
(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $('.submit-form').on('submit', function formSubmission(event){
    event.preventDefault();
    window.thoughter.createThought();
    $(document).ready(function(){
    $("#submit").click(function(){
        $("ul").append(" <li>"+ thoughts.name+"</li>");
    });

    $('.recent').on('click', function getThoughts(event){
      event.preventDefault();
      window.thoughter.getThoughts();
    });

});

  });
}());
