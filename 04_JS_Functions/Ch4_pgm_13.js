// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;

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

// Function to show where the player is
function showPlayerLocation(player) {
    console.log(player.name + " is in " + player.place);
}

// Function to show player's health
function showPlayerHealth(player) {
    console.log(player.name + " has health " + player.health);
}

// Updated showPlayerInfo function to use the above functions
function showPlayerInfo(player) {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(player);
    showPlayerHealth(player);
    console.log("------------------------------");
    console.log("");
}

// Display information for player1
var player = player1;
showPlayerInfo(player);

// Display information for player2
player = player2;
showPlayerInfo(player);

/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */