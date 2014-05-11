/*
 * Stick Up!
 * www.stickup.gary-wilkerson.com  
 * By: Gary Wilkerson | www.gary-wilkerson.com  
 * Free to use under the MIT license.  
 * http://www.opensource.org/licenses/mit-license.php
*/

Freeze!  This is Stick Up!

Thank you for downloading!

=======================================

Table of contents:

	-Markup
	-Options
	-Styles

=======================================

 -- Markup --

First, make sure you include jQuery and stickUp.js:

	<script src="js/jquery-1.11.0.min.js"></script>
	<script src="js/stickUp.jquery.min.js"></script>

Now create whatever it is that you want to appear as a result of page scrolling.  Please note that this obviously 
does not have to be an element that "sticks" to the top of your page.  It could be stuck to the bottom, or just something 
that you need to fade/slide in at a specific page location.  For the sake of example though I will illustrate a site 
menu:

	<div id="panel">
		<ul>
			<li><a href="#">These</a></li>
			<li><a href="#">Are</a></li>
			<li><a href="#">Your</a></li>
			<li><a href="#">Menu</a></li>
			<li><a href="#">Items</a></li>
		</ul>
	</div>

Keep in mind that the menu's default identifier for Stick Up is "#panel" as shown above (see more in the options section). 
Now it's time to go ahead and call for Stick Up!:

	<script>
		$('#panel').stickUp();
	</script>



-- Options --

Here is a list of your options, a description of each, and their defaults:


Option:			'panel'	
Description:	In case you want to change the name of your menu's id/class attribute.  	
Default:		'#panel'


Option:			'position'	
Description:	This one is, perhaps, most important.  This is the scroll position that you want to trigger the 
				appearance of your "panel" or element, which is measured in pixels. So, for example, if you want 
				your element to appear when the user has scrolled down 1000px, you must change this option to 
				"position : 1000".  	
Default:		250


Option:			'time'	
Description:	Time it takes for your "panel" to become fully visible by either fading or sliding in.  Pretty straighforward.	
Default:		500


Option:			'effect'	
Description:	You have the option of either a fade or slide effect.	
Default:		'fade'



-- Styles --

Stick Up! comes with a very minimal stylesheet, but nothing about it is necessary  at all so feel free to throw it away.  Please note though that Stick Up! automatically sets the display of your Stick Up! "panel" to "none", so make sure and style your elements before making the call to this plugin.  Otherwise, have fun and thanks again!




Feel free to contribute on GitHub (github.com/gwilkerson/StickUp), visit me at www.gary-wilkerson.com, and follow me on twitter @wilkerson_gary.


