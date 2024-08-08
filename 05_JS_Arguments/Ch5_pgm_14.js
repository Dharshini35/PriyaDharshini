// Displaying a player's information using properties

// Function to display a line of asterisks with variable length
var showLine;

showLine = function (length) {
    var line = "****************************"; // Long string of asterisks
    console.log(line.substring(0, length)); // Output a substring of the specified length
};

// Function to display player's name in a box
var showPlayerNameInBox;

showPlayerNameInBox = function (playerName) {
    var borderLength = playerName.length + 4; // Calculate length for border
    showLine(borderLength); // Print the top border
    console.log("* " + playerName + " *"); // Print the player's name with padding
    showLine(borderLength); // Print the bottom border
};

// Existing functions to display player's information
var showPlayerName = function (playerName) {
    showPlayerNameInBox(playerName); // Show name in a box
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

// Function to display all player info
var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");

    showPlayerName(playerName);

    showLine(playerName.length + 4); // Use line length for formatting

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    showLine(playerName.length + 4); // Use line length for formatting
    console.log("");
};

// Player objects
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

// Display player info
showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);




/* Further Adventures
 *
 * 1) Define a showLine function with a parameter
 *    for the length of line.
 *    e.g. showLine(5) should output
 *    -----
 *    showLine(20) should output
 *    --------------------
 *
 *    Hints:
 *    a) In the function body declare a line variable
 *       and assign it a long string of dashes.
 *    b) Use the substring function to grab
 *       a line of the correct length.
 *       line.substring(0, 10) would have length 10.
 *
 * 2) Use your showLine function to display the
 *    player's name in a box.
 *    ----------
 *    - Kandra -
 *    __________
 *
 * 3) Update your showLine function to use
 *    asterisks rather than dashes.
 *    **********
 *    * Kandra *
 *    **********
 *
 */