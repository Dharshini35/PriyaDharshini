// Returning the sum of two numbers

// Function to add two numbers
var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

// Find and display the sum of a different pair of numbers
var newSum = add(15, 42);
console.log(newSum); // Outputs the sum of 15 and 42

// Display the sum with a custom message
var number1 = 50;
var number2 = 23;
var sum = add(number1, number2);
console.log("The sum of " + number1 + " and " + number2 + " is " + sum);

// Use the add function to add more than two numbers
var totalSum = add(add(10, 20), 30);
console.log(totalSum); // Outputs the sum of 10, 20, and 30

// Function to add three numbers
var addThree;

addThree = function (number1, number2, number3) {
    return number1 + number2 + number3;
};

// Example usage of addThree
var sumThree = addThree(10, 20, 30);
console.log(sumThree); // Outputs the sum of 10, 20, and 30



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */