// Passing information to a function

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message +  "It's full of stars!");
};

showMessage("The sky is clear tonight!"); 
showMessage("Don't forget to look up at the stars!"); 
showMessage("It's a perfect night for stargazing!"); 



/* Further Adventures
 *
 * 1) Change the message in the parentheses
 *    when showMessage is called on line 9.
 *
 * The value in the parentheses when showMessage is called
 * is an argument. "It's full of stars!" was the
 * original argument on line 9.
 *
 * 2) Add two more calls to the showMessage function
 *    with different arguments each time.
 *
 * 3) Change the showMessage function itself.
 *    Make it add some extra text after the
 *    message passed in.
 *
 */