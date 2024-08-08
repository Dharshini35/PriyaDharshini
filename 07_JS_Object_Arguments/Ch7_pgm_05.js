// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);

// Function to show the larger of two numbers
var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

// Function to show the smallest of three numbers
var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest of " + num1 + ", " + num2 + ", and " + num3);
};

// Testing the functions
showSmaller(12, 3);
showSmaller(-10, 3);

showLarger(12, 3);
showLarger(-10, 3);

showSmallest(12, 3, 7);
showSmallest(-10, 3, 5);
showSmallest(1, 1, 1);


/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */