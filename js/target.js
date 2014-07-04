/*********************************************
Daniel Jenkins
O'reilly Javascript tutorial
VTC Javascript library tutorial
*********************************************/

/*********************************************
23. Centering image vertically
*********************************************/
// When the page finishes loading.
Event.observe(window, 'load', function(){
	// Initializing variables.
	var parentHeight = $('header').getHeight();
	var childHeight = $('logo').getHeight();
	$('logo').setStyle({
		top: (parentHeight - childHeight) / 2 + 'px'
	});
});

/*********************************************
22. Read user input, output only once.
*********************************************/
/*
// When the page finishes loading.
window.onload = function () {
	
	// Function that appends a greeting
	function addGreeting(){
		// Initializing variables.
    var greeting = "Hello "; 
    var main = document.getElementById("main");
    var h2 = document.createElement('h2');
    h2.classList.add('greeting');
    
    // Read user input
    var text_section = document.getElementById("text_section");
    var name = text_section.value;
    
    // Program logic
    greeting += name;
    h2.innerHTML = (greeting);
    
    // Output the message.
 		main.appendChild(h2);
 		 
	}
	
  // Initializing variables.
  var button_submit = document.getElementById("submit_section");
  
  button_submit.onclick = function () {
    
    // Check for previous user click
    var output = document.querySelector('.greeting');
    if (!output) {
	    output = addGreeting(main);
		}
    
  };
};*/

/*********************************************
21. Recursion with a break case.
*********************************************/

/*
// When the page finishes loading.
Event.observe(window, 'load', function(){
	// Initializing variables.
	var ans, main, output;
	
	var num = 5;
	
	// Recursive factorial function
	function factorial(x){
		if(x <= 1){
			return 1;
		}
		
		return x * factorial(x - 1);
	}
	
	// Program logic
	ans = factorial(num);
	main = $('main');
	output = new Element('p').update(ans);
	main.insert(output);
});*/

/*********************************************
20. The idea of scope.
*********************************************/
/*
// When the page finishes loading.
Event.observe(window, 'load', function(){
	// Initializing variables.
	var ans, main, output;
	
	var i, j;
	i = 2;
	j = 3;
	var k = 3;
	
	// Program logic
	if(i === j){
		if (j === k) {
			ans = "i equals k"; 
		}
	}
	else{
		ans = "i does not equal j";
	}
	
	main = $('main');
	output = new Element('p').update(ans);
	main.insert(output);
	
});*/

/*********************************************
19. Prototype: convert number to hex equivalent.
*********************************************/

/*
function convertHex(x){
	switch(typeof x){
		case 'number':
			return x.toString(16);
		case 'string':
			return "'" + x  + "'";
		default:
			return String(x);
		}
	}
	
// When the page finishes loading.
Event.observe(window, 'load', function(){
	// Initializing variables.
	var ans, main, output;
	var num = 255;
	
	// Program logic
	ans = convertHex(num);
	main = $('main');
	output = new Element('p').update(ans);
	main.insert(output);
});*/

/*********************************************
18. On click event, change src of img.
*********************************************/
/*
// Program logic
function loadArtData(){
	// Initializing variables.
	var setupTarg;
	var pictures;
	pictures = $('pictures_section');
	setupTarg = this.id;
	
	// Change the img src
	if(setupTarg === 'perky'){
		pictures.setAttribute('src', '/img/Goth_Type_8__The_Perky_Goth_by_Trellia.jpg');

	}
	else if(setupTarg === 'j-goth'){
		pictures.setAttribute('src', '/img/Goth_Type_6__The_J_Goth_by_Trellia.jpg');
	}
}

// When the page finishes loading.
Event.observe(window, 'load', function(){
	$$('#main input').invoke('observe', 'click', loadArtData);
});
*/

/*********************************************
17. Obtain ID of object clicked.
*********************************************/
/*
// Global variables
var setupTarg;

// When the page finishes loading.
Event.observe(window, 'load', function(){
	// Call a new function.
	$$('#sidebar a').invoke('observe', 'click', loadArtData);
});

// Program logic
function loadArtData(event){
	Event.stop(event);
	setupTarg = this.id;
	alert(setupTarg);
}*/

/*********************************************
16. Calling a function  
*********************************************/
/*
// When the page finishes loading.
Event.observe(window, 'load', function(){
	// Call a new function.
	$$('#sidebar a').invoke('observe', 'click', loadArtData);
});

// Stops link from changing page.
function loadArtData(event){
	Event.stop(event);
}*/


/*********************************************
15. Onclick in prototype.
*********************************************/
/*// When the page finishes loading.
Event.observe(window, 'load', function () {
  // Output the message on a link click.
  $$('#sidebar a').invoke('observe', 'click', function () {
    alert("What are you doing?");
  });
});
*/

/*********************************************
14. Event handling in protoype.
*********************************************/
/*Event.observe(window, 'load', function() {
  alert("hello dave");
});*/

/*********************************************
13. Adding at run time.
*********************************************/

// When the page finishes loading.
/*window.onload = function () {
  // Initializing variables.
  var fruit_one = "mango";
  var main = document.getElementById("main");
  var output = document.createElement("h2");
  
  // Program logic
  String.prototype.debug = "debug...";
  output.innerHTML = fruit_one.debug;
  
  // Output the message.
  main.appendChild(output);
  
};*/

/*********************************************
12. Onclick event evoking a function
*********************************************/

/*// When the page finishes loading.
window.onload = function () {
  // Initializing variables.
  var button_submit = document.getElementById("submit_section");
  var output = document.createElement("h2");
  
  button_submit.onclick = function () {
    // Initializing variables.
    var greeting = "Hello "; 
    var main = document.getElementById("main");
    
    var text_section = document.getElementById("text_section");
    var name = text_section.value;
    
    // Program logic
    greeting += name;
    output.innerHTML = (greeting);
    
    
  };
  // Output the message.
  main.appendChild(output);
};*/

/*********************************************
11. The for loop, printing the index while it iterates.
*********************************************/
/*// Initializing variables.
var main = document.body;
var output;

// Print the message 5 times as a result
for (var i = 0; i < 5; i = i + 1) {
  var output;
  output = document.createElement("h2");
  output.innerHTML = i;
  
  // Output result.
  main.appendChild(output);
}

// Output a end of loop comment
output = document.createElement("h2");
output.innerHTML = ('End of loop');

main.appendChild(output);*/

/*********************************************
10. Function, when an argument is missing go to a fallback.
*********************************************/
/*function printMessage(list_item, message){
  // Initializing variables.
  var output = document.body;
  
  // Check for a message.
  if(message === undefined){
    message = "No Default Message"; 
  }
  
  // Output result.
  output.innerHTML = (list_item + ". " + message);
}

  // Argument has two items feed.
 printMessage(2); */

/*********************************************
9. Function, another function that feeds the argument.
*********************************************/
/*// Initializing variables.
var num1 = 333;
var num2 = 444;
var output = document.body;

// Function, simplest of all return the sum of two values
function addf(x, y) {
  return x + y;
}

// Output result.
output.innerHTML = (addf(num1, num2));*/

/*********************************************
8. The switch statement.
*********************************************/
/*// Initializing variables.
var x = 2;
var output = document.body;

// Logic check with a switch.
var result;
switch(x) {
  case 1:
    result = x;
    break;
  case 2: 
    result = x;
    break;
}

// Output result.
output.innerHTML = (result);*/

/*********************************************
7. Nested objects, coordiates of a square
*********************************************/

/*// When the page finishes loading.
window.onload = function () {
  // Initializing variables.
  var main = document.getElementById("main");
  var output = document.createElement("h2");
  var side = 3.0;
  
  
  // The box, first point cooridate top left
  var point = {
    x: 3.2,
    y: 7.2
  };
  
  // The box, containing coordates to top left aswell as bottom right
  var box = {
    top_left: {x: point.x, y: point.y },
    bottom_right: {x: point.x + side, y: point.y + side}
  };
  
  // Find bottom right x value.
  output.innerHTML = (box.bottom_right.x);
  
  // Output the answer in main
  main.appendChild(output);
  
};*/

/*********************************************
6. A function, returns a value.
*********************************************/
/*// When the page finishes loading.
window.onload = function () {

  // Initializing variables.
  var main = document.getElementById("main");
  var output = document.createElement("h2");
  
  // A function, returns the square of an integer.
  function square(x) {
    return x * x;
  }
  
  // Logic, when integer is 5.
  var output_int = square(5);
  output.innerHTML = (output_int);
  
  // Output the answer in main
  main.appendChild(output);
};*/

/*********************************************
5. An object, calling the value.
*********************************************/

/*// When the page finishes loading.
window.onload = function () {
 var main = document.getElementById("main");
 var output = document.createElement("h2");
 
 // Changed the box to contain ten tea bags 
 var square_box = {tea_bags : 10};
 output.innerHTML = (square_box.tea_bags);
 
 // Output the answer in main
 main.appendChild(output);
};*/

/*********************************************
4. An array, assigned by reference.
*********************************************/
/*// When the page finishes loading.
window.onload = function () {
  // Initializing variables.
  var a = ['one'];
  var b = a;
  var main = document.getElementById("main");
  var output = document.createElement("h2");
  
  // Changed a, as a result b is also changed by reference.
  a[0] = "zero";
  
  // Now the value of output is the first element.
  output.innerHTML = (b[0]);
  main.appendChild(output); 
  
};*/

/*********************************************
4. An array, copied and printed a string.
*********************************************/

/*// When the page finishes loading.
window.onload = function () {
  // Initializing variables.
  var a = ['one', 'two', 'three'];
  var main = document.getElementById("main");
  var output = document.createElement("h2");
  
  // Does not return a value, copies array a to b.
  function copy() {
    var b = [];
    for (var i = 0; i < a.length; i = i + 1) {
      b[i] = a[i];
    }
    return b;
  }  
  
  // Call the function, a to b.
  var b = copy();  
  
  // Output the answer in main
  output.innerHTML = (b.toString());
  main.appendChild(output);
  
};*/

/*********************************************
3. Comparing the elements of an array
*********************************************/

/*// When the page finishes loading.
window.onload = function () {
  // Initializing variables.
  var a = ['one'];
  var b = ['one'];
  var main = document.getElementById("main");
  var output = document.createElement("h2");
  var more = true;
  
  // Logic, are the elements of the array equal
  for(var i = 0; i < a.length; i = i + 1) {
     if(a[i] !== b[i]){
        more = false;
     } 
  }  
  
  // Result of the logic changes output
  if (more) {
    output.innerHTML = ("true");    
  }
  else {
    output.innerHTML = ("false");
  }
  
  // Output the answer in main
  main.appendChild(output);
};
*/

/*********************************************
3. Objects are never equal
*********************************************/

/*// When the page finishes loading.
window.onload = function () {
  // Initializing variables.
  var a = {x:1};
  var b = {x:1};
  var more = a === b;
  var main = document.getElementById("main");
  var output = document.createElement("h2");
    
  // Logic, are the two objects equall?
  if(more) {
    output.innerHTML = ("true");  
  }
  else {
    output.innerHTML = ("False");  
  }
  
  // Output the answer in main
  main.appendChild(output);
};*/

/*********************************************
3. Arrays are not always equal
*********************************************/

/*// When the page finishes loading.
window.onload = function () {
  // Initializing variables.
  var a = ['one'];
  var b = ['one'];
  var more = a === b;
  var main = document.getElementById("main");
  var output = document.createElement("h2");
  
  // Logic, are the two arrays equall?
  if(more){
    output.innerHTML = ("True");  
  }
  else {
    output.innerHTML = ("False");  
  }
  
  // Output the answer in main
  main.appendChild(output);
};*/

/*********************************************
2. A comparision of a string to a new string
*********************************************/
// When the page loads.
//window.onload = function () {
  // Initialize variable 
/*  var output = document.createElement("h2");
  var main = document.getElementById("main");
  var sentance = "lazy fox";
  */
  // Wrapper of string
/*  var sentance_wrapper = new String(sentance);
  */
  // Equality of string and string wrapper
/*  var more = sentance_wrapper == sentance;
  */
  
/*  if(more) {
      output.innerHTML = ("True");
  } 
  else {
      output.innerHTML = ("False");  
  }*/
  
  // Add output to main section
/*  main.appendChild(output);
};*/

/*********************************************
1. The boolean type example.
*********************************************/

// On page load
/*window.onload = function () {
  var digit = "\xff";
  var more = 0/0;  
  */
  // Get the main section
/*  var main = document.getElementById("main");
  var output = document.createElement("h2");
 */ 
  // Set output to the value of digit
/*  output.innerHTML = (digit);
  */
  // Add output to main section
/*  if (!more) {
   output.innerHTML = ("Don\'t worry");
   main.appendChild(output);
  }
};*/