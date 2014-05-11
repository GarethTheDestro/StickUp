/*
 * Stick Up!
 * www.stickup.gary-wilkerson.com  
 * By: Gary Wilkerson | www.gary-wilkerson.com  
 * Free to use under the MIT license.  
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($){
	
	$.fn.stickUp = function(options){

		options = $.extend({
			'panel' : '#panel',
			'position' : 250,
			'time' : 500,
			'effect' : 'fade'
		}, options);

		var effect = options.effect;
		var menu = options.panel;
		var position = options.position;
		var time = options.time;

		$(panel).css('display','none');

		$(window).scroll(function(){

			var scrollPosition = $(window).scrollTop();

				if(effect == 'fade'){
					if(scrollPosition >= position){
						$(menu).fadeIn(time);
					}else{
						$(menu).fadeOut(time);
					}

				}else if(effect == 'slide'){
					if(scrollPosition >= position){
						$(menu).slideDown(time);
					}else{
						$(menu).slideUp(time);

					}

				}

		});

		return this;

	};

}(jQuery));