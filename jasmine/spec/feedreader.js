/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined and not empty', function() {
            allFeeds.forEach(function(element) {
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe('');
            });
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined and not empty', function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe('');
            });
        });
    });


    /* a new test suite named "The menu" */
    describe('The menu', function() {

    

        /* a test that ensures the menu element is hidden by default.
         */
        var hidden = $('body').hasClass('menu-hidden');
        it('default is hidden', function() {
            expect(hidden).toBe(true);
        });

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu does appear and disappear', function() {
              var menuIcon = $('.menu-icon-link');
              
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).toBe(false);
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });

    });

    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

    

        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('single .entry within .feed container', function() {
            var result = $('.feed').find('.entry');
            expect(result.length).toBeGreaterThan(0);
        });

    });

    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

    
        var currentFeed;
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                currentFeed = $('.feed').html();
                done();
            });
        });

        it('ensure the new feed not equal to previous', function() {
            var newFeed;
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                expect(currentFeed).not.toBe(newFeed);
            });
        });

    });

}());
