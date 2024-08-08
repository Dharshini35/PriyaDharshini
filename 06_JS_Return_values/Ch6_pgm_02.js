// Using an argument to determine the return value

// Function to return a greeting message to two names
var getHelloTo;

getHelloTo = function (name1, name2) {
    return "Hello to " + name1 + " and " + name2;
};

// Call the function with two names
var fullMessage;

fullMessage = getHelloTo("Kandra", "Dax");

// Display the result
console.log(fullMessage);



/* Further Adventures
 *
 * 1) Change the definition of getHelloTo
 *    to accept two parameters, name1 and name2.
 *
 * 2) Make the function return a string of
 *    the form "Hello to Kandra and Dax"
 *
 */