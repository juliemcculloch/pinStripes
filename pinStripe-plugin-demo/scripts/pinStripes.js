$.fn.pinStripes = function(options) {
	var settings = $.extend({

	 spacing: 15,  // change the line spacing here
	 color: '#FFFFFF',  //  change colour here
	 opacity: 0.5  //  change the opacity here

	}, options)

	// Create our stripes
	for(i = 0 ; i < 200 ; i++ ){

		//Add them to the page
		$(this).append('<div class="stripe"></div>'); 

		// Assign their position
		 $('.stripe').eq(i).css( "left", i*settings.spacing+'px' );
		 $('.stripe').eq(i).css( "border-color", settings.color );
		 $('.stripe').eq(i).css( "opacity", settings.opacity ); 

 		// Bonus code by Sacha Sayan - undo and see what happens 
		 	// $('.stripe').eq(i).css( "transform", "rotate(" +Math.random()*360+"deg)");

		 // Assign the animation - the speed it scrolls on the page
		 var randomNumber = Math.random()*12000+100; 
		 $('.stripe').eq(i).css( "height", 0+'%' );
		 $('.stripe').eq(i).animate({'height':'100%'},randomNumber); 
	}


}