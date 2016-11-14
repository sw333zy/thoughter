(function() {
    'use strict';
    var expect = chai.expect;

    describe('thoughterspace nav', function() {
        it('it should know that the namespace exists between navagations', function() {
            expect(window.thoughter).to.be.a('object');

        });

    });

    window.onload = function() {
    if (window.jQuery) {
        // jquery is loaded
        console.log('yep');
    } else {
        // jquery is not loaded
        console.log('nope');
    }
};





})();
