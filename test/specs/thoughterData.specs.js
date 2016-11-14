(function() {
    'use strict';
    var expect = chai.expect;

    describe('thoughterspace nav', function() {
        it('it should know that the namespace exists between navagations', function() {
            expect(window.thoughter).to.be.a('object');

        });

    });

    describe('jquery is loaded', function(){
      it('it should load jquery', function(){
        expect (window.onload = function() {
            if (window.jQuery) {
                // jQuery is loaded
                console.log('yep');
            } else {
                // jQuery is not loaded
                console.log('nope');
            }
        });
      });
    });



    // describe("thought list", function(){
    //      it("should obtain thoughts", function(asyncComplete){
    //        var result = window.thoughter.recentThought(); //returns xhr promise
    //          expect(result).to.be.an("object");
    //          expect(result.done).to.be.a("function");
    //          expect(result.fail).to.be.a("function");
    //      result
    //        .done(function(){
    //          // do assertions
    //          // make it fail: 1 is equal to two (it should fail)
    //          asyncComplete();
    //        })
    //        .fail();
    //        // you might do assertions in here
    //        asyncComplete();
    //        });
    //    });
})();
