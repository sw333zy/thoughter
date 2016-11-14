(function() {
    'use strict';
    window.thoughter = window.thoughter || {};

    window.thoughter.createThoughts = createThoughts;
    window.thoughter.getThoughts = getThoughts;


    /**
     * Ajax call to create a new thought
     *  @param {String} createThought string put in the input
     *  @return {promise}  from ajax
     */
    function createThoughts() {
      return  $.ajax({
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

    /**
     * get thoughts from api server
     * @return {promise}
     */
     function getThoughts(othersThoughts) {
       if (typeof(othersThoughts) !== 'number' || othersThoughts < 0 ){
           othersThoughts = 20;
       }
       return   $.ajax({
                url: 'https://thoughter.herokuapp.com/api/Thoughts',
                method: 'GET',
                dataType: 'json',

            })
            .done(function handleSuccess(data) {
                console.log('success', data);
                window.thoughter.appendThoughts(data);
            })
            .fail(function handleFailure(xhr) {
                console.log('failed', xhr);
            });
    }





}());
