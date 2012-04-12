$(document).ready(function() {
	/* Background noise
	================================================== */
	$('body').noisy({
	    'intensity' : 1, 
	    'size' : 200, 
	    'opacity' : 0.08, 
	    'fallback' : '', 
	    'monochrome' : false
	}).css('background-color', '#FFF');
});