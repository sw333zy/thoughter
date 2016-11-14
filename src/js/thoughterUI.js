(function() {
        'use strict';

        //'use strict';
        window.thoughter = window.thoughter || {};

        //window.thoughter.createThoughts = createThoughts;
        //window.thoughter.getThoughts = getThoughts;
        //window.thoughter.showThoughts = showThoughts;
        window.thoughter.appendThoughts = appendThoughts;

        $('.submit-form').on('submit', function formSubmission(event) {
            event.preventDefault();
            window.thoughter.createThoughts();
            $('#new').hide();
            $('#recent').show();

        });

        $('[href="#recent"]').on('click', function getThoughts(event) {
            event.preventDefault();
            $('#recent').show();
            $('#new').hide();
            window.thoughter.getThoughts();

        });

        $('[href="#new"]').on('click', function getThoughts(event) {
            event.preventDefault();
            $('#recent').hide();
            $('#new').show();
            

        });


        // TODO: create a function to add thoughts to the page
        // function showThoughts(thoughts) {
        // loop



                function appendThoughts(thoughts){


                  thoughts.forEach(function(thoughter) {
                      console.log('it hit');
                      console.log(thoughts);
                      console.log(thoughter);
                    $('.recentThought').append($('<li>' + thoughter.content +'</li>'));


                  });
                }



        }());
