// Converting a string to upper case

// Function to convert a string to uppercase
var getBig = function (str) {
    return str.toUpperCase();
};

// Function to convert a string to lowercase
var getSmall = function (str) {
    return str.toLowerCase();
};

// Test the functions
var planet = "Jupiter";

var bigPlanet = getBig(planet);
var smallPlanet = getSmall(planet);

console.log(planet + " becomes " + bigPlanet);  // Jupiter becomes JUPITER
console.log(planet + " becomes " + smallPlanet); // Jupiter becomes jupiter



/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */