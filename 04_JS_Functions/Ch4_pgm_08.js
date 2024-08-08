// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(3)View Reports");
    console.log("(4)Settings");
	console.log("(9) Quit");
};

displayMenu();

var newMenu;

newMenu = function () {
	console.log("My Menu");
	console.log("(A)Start");
	console.log("(B)Load");
	console.log("(C)Options");
	console.log("(D)Quit");
}

newMenu();

/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */