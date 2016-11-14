(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
  // window.thoughter.createThoughts = createThoughts;
  // window.thoughter.getThoughts = getThoughts;
  // window.thoughter.showThoughts = showThoughts;

  $('main').hide();
  console.log('running', $('main'));

  $(window).on('hashchange', function viewSwitch(){
      $('main').hide();
      $('' + window.location.hash).show();



      if (window.location.hash === '#recent'){
       window.thoughter.getThoughts();
         // call the function on the namespace for utting thoughts into the page
         // jQuery(document).ready(function($) {
//     window. = function() {
//         alert("Time for a coffee break!");
//     };
// });
       }
     });



}());
