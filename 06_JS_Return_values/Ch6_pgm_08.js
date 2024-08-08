// Getting strings for a player’s health and location

var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

// Function to show player information
var showPlayerInfo = function (playerName, playerHealth, playerPlace) {
    // Get health and place info using the provided functions
    var healthInfo = getPlayerHealth(playerName, playerHealth);
    var placeInfo = getPlayerPlace(playerName, playerPlace);

    // Display the information
    console.log(healthInfo);
    console.log(placeInfo);
};

showPlayerInfo("Dax", 50, "The Bath");


/* Further Adventures
 *
 * 1) Create a showPlayerInfo function with three
 *    parameters, playerName, playerHealth and
 *    playerPlace.
 *
 * 2) Call getPlayerHealth and getPlayerPlace
 *    from your new showPlayerInfo function.
 *
 *    e.g. showPlayerInfo("Dax", 50, "The Bath")
 *    should produce the output
 *
 *    Dax has health 50
 *    Dax is in The Bath
 *
 */