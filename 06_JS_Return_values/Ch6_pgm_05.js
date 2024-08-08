// A function with three arguments

// Function to calculate total cost with optional discount
var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    // Default discount to 0 if not provided
    discount = discount || 0;
    // Calculate the total cost
    return callOutCharge + costPerHour * numberOfHours - discount;
};

// Display the cost for 12 hours of work
var hours = 12;
console.log("$" + totalCost(30, 40, hours)); // Output: $510

// Display the cost with a $20 discount for 3 hours of work
var callOutCharge = 30;
var costPerHour = 40;
var numberOfHours = 3;
var discount = 20;

console.log("$" + totalCost(callOutCharge, costPerHour, numberOfHours, discount)); // Output: $130



/* Further Adventures
 *
 * 1) What is the cost for 12 hours work?
 *
 * 2) The plumber sometimes issues discount coupons.
 *    Add a fourth parameter to the totalCost
 *    function definition to account for discounts.
 *
 * 3) Update the function to subtract the discount
 *    from the total before returning it.
 *
 * 4) If a customer has a $20 off coupon,
 *    update the call to totalCost
 *    to display the total cost.
 *    It should now be $130 for 3 hours.
 *
 */