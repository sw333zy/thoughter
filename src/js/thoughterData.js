(function() {
    'use strict';
    window.thoughter = window.thoughter || {};

    window.thoughter.createThoughts = createThoughts;
    window.thoughter.getThoughts = getThoughts;
    window.thoughter.showThoughts = showThoughts;

    /**
     * Ajax call to create a new thought
     * and put those into a <ul>
     *  @param {String} createThought the value of the input
     *  @return {[type]} [description]
     */
    function createThoughts() {

        $.ajax({
                url: 'https://thoughter.herokuapp.com/api/Thoughts',
                method: 'POST',
                dataType: 'json',
                data: JSON.stringify({
                    content: $('.form-control').val()
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .done(function handleSuccess(data) {
                console.log('success', data);
            })
            .fail(function handleFailure(xhr) {
                console.log('failed', xhr);
            });
    }


    function getThoughts() {

        return $.ajax({
                url: 'https://thoughter.herokuapp.com/api/Thoughts',
                method: 'GET',
                dataType: 'json',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .done(function handleSuccess(data) {
                console.log('success', data);
            })
            .fail(function handleFailure(xhr) {
                console.log('failed', xhr);
            });
    }

    function showThoughts() {

        return $.ajax({
                url: 'https://thoughter.herokuapp.com/api/Thoughts/',
                method: 'GET',
                dataType: 'json',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .done(function success(data) {
                console.log('success', data);
            })
            .fail(function failure(xhr) {
                console.log('failed', xhr);
            });
    }




}());
