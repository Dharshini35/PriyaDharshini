// Calling the same function with different arguments

var showMessage;

showMessage = function (message) {
	console.log("The message is:\n" + message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

var myMessage = "This is a message stored in a variable.";

showMessage(myMessage);

/* Further Adventures
 *
 * 1) Change the showMessage function to
 *    display its prefixed text on a
 *    separate line to the message.
 *
 * 2) Declare a myMessage variable and
 *    assign it a string value.
 *
 * 3) Call the showMessage function with
 *    myMessage as the argument.
 *
 */