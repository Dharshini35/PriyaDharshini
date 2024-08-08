// Displaying a player's information

var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;
var showLine;

showLine = function () {
    console.log("----------------------------");
};

var showBlankLine;

showBlankLine = function () {
    console.log(""); // Log a blank line
};

showPlayerName = function (playerName) {
    console.log(playerName);
};

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};


showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showBlankLine(); 

    showPlayerName(playerName);

    showLine(); 

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    showLine(); 
    showBlankLine(); 
};


showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);



/* Further Adventures
 *
 * 1) Create a function called showLine
 *    that logs a line of dashes to the console.
 *    ----------------------------
 *
 * 2) Update the showPlayerInfo function to
 *    use the showLine function rather than
 *    logging dashes to the console directly.
 *
 * 3) Create and use a showBlankLine function
 *    for logging a blank line to the console.
 *
 */