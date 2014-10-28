# Pinstripes jQuery Plugin

## Usage:
Pinstripes is a simple plugin that let's you create an animated background of lines. This is an awesome way of adding a textured pattern to your website.

## How to Begin:
### HTML:
Add scripts to your <head></head> section of your html code:
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="scripts/pinStripes.js"></script>
<script src="scripts/main.js"></script> 

Add <div class="background"></div> to your html inside your <body></body> tag.

### CSS:
Add body{}, .background{} and .stripes{} to your css file. 

### JQUERY:
Add a script folder to your project.
Copy pinstripe.js and main.js files into folder.

### Customization:
pinStripes.js customization are: 
line spacing, colour and opacity.

var settings = $.extend({

	spacing: 15,     // change the line spacing. You can add more or less line spacing here.
	color: '#FFFFFF',     // change colour hex here - will only except colour hex.
	opacity: 0.5     // change the opacity from 0.1 - 0.9 here.

}, options)

### Demo:
download demo folder.