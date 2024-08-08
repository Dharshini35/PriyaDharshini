// Finding a character with indexOf

var message = "We choose to go to the Moon!";

// Task 1
var wordIndex = message.indexOf("go");
console.log("Index of 'go':", wordIndex); // Output: 14

// Task 2
var startIndex = message.indexOf("choose");
var word = message.substring(startIndex, startIndex + 7); // Use substring for clarity
console.log("Word 'choose':", word); // Output: 'choose'

// Task 3
var lastIndex = message.lastIndexOf("oo");
console.log("Last index of 'oo':", lastIndex); // Output: 24



/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */