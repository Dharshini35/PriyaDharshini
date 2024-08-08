// Displaying a player's name

var showPlayerName;

showPlayerName = function (playerName) {
    // Display the player's name with the formatted text
    console.log("The player's name is " + playerName);
    
    // Display the number of letters in the player's name
    console.log("The number of letters in the name is " + playerName.length);
};

// Test the function with different player names
showPlayerName("Kandra");
showPlayerName("Dax");


/* Further Adventures
 *
 * 1) Update the text logged so that it is
 *    of the form:
 *    The player's name is Kandra
 *
 * Strings have a length property that gives
 * the number of characters in the string.
 * e.g. playerName.length.
 *
 * 2) Make the function show the number
 *    of letters in the player's name.
 *
 */