(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    window.thoughter.appendThoughts = appendThoughts;

    $('.submit-form').on('submit', function formSubmission(event) {
        event.preventDefault();
        window.thoughter.createThoughts()
            .done(function viewSwitch() {
                window.location.hash = '#recent';

            });


    });
    // TODO: create a function to add thoughts to the page
    // function showThoughts(thoughts) {
    // loop
    function appendThoughts(thoughts) {
        thoughts.forEach(function(thoughter) {
            console.log('it hit');
            console.log(thoughts);
            console.log(thoughter);
            $('.recentThought').append($('<li class="panel panel-primary list-unstyled"><header class="panel-heading">'+ thoughter.createTime + '</header><article class="panel-body">' + thoughter.content + '</article></li>'));

        });
    }

}());
