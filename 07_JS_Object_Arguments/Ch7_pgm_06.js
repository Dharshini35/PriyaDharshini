// Using Math.min and Math.max to constrain an argument

// Function to create a line with a constrained length
var line = function (lineLength) {
  var fullLine = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return fullLine.substr(0, lineLength);
};

// Function to generate a string of spaces with a constrained length
var spaces = function (spaceLength) {
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return " ".repeat(spaceLength);
};

// Function to draw an empty box of specified width and height 5
var emptyBox = function (width) {
  var fullLine = line(width);  // Draw the top and bottom lines
  var emptyLine = "=" + spaces(width - 2) + "=";  // Create the empty lines with spaces

  console.log(fullLine);  // Top border
  for (var i = 0; i < 3; i++) {  // 3 empty lines
      console.log(emptyLine);
  }
  console.log(fullLine);  // Bottom border
};

// Test the line function
console.log(line(30));  
console.log(line(40));  
console.log(line(50));  

// Test the spaces function
console.log("[" + spaces(10) + "]"); 
console.log("[" + spaces(45) + "]");  

// Test the emptyBox function
emptyBox(12);  
emptyBox(8);   
emptyBox(50);  

  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */