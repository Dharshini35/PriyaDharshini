// Breaking a function by changing a variable name


var msg1 = "It's full of stars!";
var msg2 = "And there's a moon!";

var showMessage = function () {

console.log(msg1);
console.log(msg2);

console.log(msg1 + " " + msg2);
};

showMessage();



/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */