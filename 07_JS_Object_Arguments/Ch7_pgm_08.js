// Finding substrings

var message = "We choose to go to the Moon!";

// Extracting substrings using substr
console.log(message.substr(14, 5)); // Moon!
console.log(message.substr(10, 9)); // go to the
console.log(message.substr(0, 10));  // We choose

// Further explorations
console.log(message.substr(14)); // Moon!
console.log(message.substr(-6)); // Moon!
console.log(message.substr(-15, 5)); // to go



/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */