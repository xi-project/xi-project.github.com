$(document).ready(function() {
	/* Skeleton tabs activation
	================================================== */
	var tabs = $('ul.tabs');
	
	tabs.each(function(i) {
		//Get all tabs
		var tab = $(this).find('> li > a');
		tab.click(function(e) {
			
			//Get Location of tab's content
			var contentLocation = $(this).attr('href') + "Tab";
			
			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
				//Make Tab Active
				tab.removeClass('active');
				$(this).addClass('active');
				
				//Show Tab Content & add active class
				$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
				
			} 
		});
	});
	
	/* Background noise
	================================================== */
	$('body').noisy({
	    'intensity' : 1, 
	    'size' : 200, 
	    'opacity' : 0.05, 
	    'fallback' : '', 
	    'monochrome' : false
	}).css('background-color', '#FFF');
});