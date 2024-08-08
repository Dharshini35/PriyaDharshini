// Displaying a player's health via object properties

// Function to display player's health with multiplier
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth, playerHealthMultiplier) {
    var totalHealth = playerHealth * playerHealthMultiplier;  // Calculate total health
    console.log(playerName + " has health " + totalHealth);
};

// Player objects with healthMultiplier property
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier: 1.5  // Added property
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier: 2  // Added property
};

// Call the function with player objects and their healthMultiplier
showPlayerHealth(player1.name, player1.health, player1.healthMultiplier);
showPlayerHealth(player2.name, player2.health, player2.healthMultiplier);



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */