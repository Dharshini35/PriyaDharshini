// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

function isValidVariable(name) {
    // Regular expression to match valid JavaScript variable names
    const validVariablePattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  
    // Check if the name matches the pattern
    return validVariablePattern.test(name);
  }
  
  // Test cases
  console.log(isValidVariable('first_name')); // True
  console.log(isValidVariable('first-name')); // False
  console.log(isValidVariable('1first_name')); // False
  console.log(isValidVariable('firstname')); // True
  