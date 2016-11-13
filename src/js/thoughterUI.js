(function() {
        'use strict';

        'use strict';
        window.thoughter = window.thoughter || {};

        window.thoughter.createThoughts = createThoughts;
        window.thoughter.getThoughts = getThoughts;
        window.thoughter.showThoughts = showThoughts;

        $('.submit-form').on('submit', function formSubmission(event) {
            event.preventDefault();
            window.thoughter.createThought();

        });

        $('.recent').on('click', function getThoughts(event) {
            event.preventDefault();
            window.thoughter.getThoughts()
                .done(function handleSuccess(data) {
                    console.log('got data');
                });
        });


        // TODO: create a function to add thoughts to the page
        // function showThoughts(thoughts) {
        // loop
        createThought.forEach(function(recentThoughts) {
            console.log('it hit')
                .$('#recent').click(function() {
                    $('.recentThought').append($('<li>', {
                        text: $('data').val()
                    }));
                });


        }());
