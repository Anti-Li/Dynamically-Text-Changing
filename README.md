# Dynamically-Text-Changing

This about using JS(a little CSS) to make change text dynamically, look the main page of https://www.microsoft.com/net to see more， because these  pull away and spin off the module of view-source:www.microsoft.com/net. Thanks again for some CSS from MIT and some js from Microsoft.

##Import to HTML
```html
<!DOCTYPE html>
<html class="js">
<head>
	<title>Free. Cross-platform. Open source. A developer platform for building all your apps.</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="bootstrap-custom.min.css"/>
	<script src="jquery-3.3.1.min.js"></script>
	<script src="textchanging.es6"></script>
</head>
<body class="home" style="position: relative; overflow-y: auto;">
	<header>
		<div class="jumbotron x-hidden-focus">
			<div class="container text-center">
				<h1>Free. Cross-platform. Open source. A developer platform for building <span class="tagline typing">all your</span> apps.</h1>
			</div>
		</div>
	</header>
	<script>
		var jumbotron = new Jumbotron();
		jumbotron.start("web", "mobile", "desktop", "gaming", "IoT", "all your");
	</script>
</body>
</html>
```
Coding like these helping Dynamically-Text-Changing to work. You should add
```html
<!-- in <body> or <header> tag-->
<div class="jumbotron x-hidden-focus">
	<div class="container text-center">
		<h1>$1 <span class="tagline typing">$2</span> $3</h1>
	</div>
</div>
```
to  `<body>`($1, $2 and $3 are your own text) and add
```javascript
//in <script> tag
var jumbotron = new Jumbotron();
jumbotron.start($4);
```
to `<script>`($4 is `"$4.1", "$4.2", "$4.3", "$4.4", "$4.5" ······`) in your HTML file.
  
  ##JavaScript Class Declare
  The class ask you to use ECMAScript6.
  ```javascript 
  //textchanging.es6
class Jumbotron{
	constructor(container = $(".tagline")) {}
	start(...taglines){}
}
  ```
