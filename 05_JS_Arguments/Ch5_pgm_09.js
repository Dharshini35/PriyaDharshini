// Displaying a player's health

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;  // Declare healthInfo variable
    healthInfo = playerName + ": health " + playerHealth + "."; // Assign formatted string to healthInfo
    console.log(healthInfo);  // Use healthInfo in console.log
};

// Test the function with different arguments
showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);
showPlayerHealth("Alex", 75);
showPlayerHealth("Jordan", 90);

/* Further Adventures
 *
 * 1) Change the showPlayerHealth function
 *    so it shows information of the form:
 *    Kandra: health 50.
 *
 * 2) Call the showPlayerHealth function
 *    using your own arguments.
 *
 * 3) Declare a variable called healthInfo
 *    inside the showPlayerHealth function.
 *
 *    var healthInfo;
 *
 * 4) Assign healthInfo the string that
 *    will be displayed.
 *
 *    healthInfo = playerName + ": health " + playerHealth;
 *
 * 5) Change the call to console.log so that
 *    it uses the healthInfo variable.
 *
 */