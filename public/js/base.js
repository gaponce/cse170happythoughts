'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	$('.navbar-default .navbar-nav>li>a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
    });
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	
}