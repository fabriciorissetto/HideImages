var head = document.querySelector("head");

/*----------- Remove the remaining styles with javascript -------------*/
var allElements = document.getElementsByTagName("*");
for (var i = 0, length = allElements.length; i < length; i++) { 
	allElements[i].style.setProperty ("background", "transparent", "important");
};					