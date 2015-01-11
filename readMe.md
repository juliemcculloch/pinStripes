# PINSTRIPES JQUERY PLUGIN

## USAGE
<p>A simple plugin that let's you create an animated background of lines.<br> 
You can change the line spacing, colour and opacity.</p>

## HOW TO USE IT
### HTML
Add script src="jquery.min.js", "main.js", "pinstripes.js" in your head section of your html code.<br>

Add "body" tag to your html code.<br>
Add div class="background" to your html code. <br>

Adding content, include: <br> 
div class="foreground" to your html code. <br>

 
### CSS
Add body{}, .background{} and .stripes{} code to your css file.<br>
Customize background colour in body{} CSS section. /* change default background hex colour here */<br>

Adding content, include: <br> 
.foreground {position: relative; z-index: 30;} 


### JQUERY
Add a script folder to your project.<br>
Copy pinstripe.js and main.js files into folder.

### CUSTOMIZATION
Customize background colour in body{ background-color: #FABB00; } in CSS section. /* change default background hex colour here - already mentioned in CSS section */<br>

Customize line spacing, stripe colour and stripe opacity in pinStripes.js: <br>

var settings = $.extend({

	spacing: 15  // change the line spacing. You can add more or less line spacing here.
	
	color: '#FFFFFF'  // change colour hex here - will only except colour hex.
	
	opacity: 0.5 // change the opacity from 0.1 - 0.9 here.

}, options)

### DEMO
https://github.com/juliemcculloch/pinStripes
http://www.juliemcculloch.com/pinStripes/index.html