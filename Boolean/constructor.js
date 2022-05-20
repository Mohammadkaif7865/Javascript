// Definition and Usage
// The constructor property returns the function that created the Boolean prototype.

// For JavaScript booleans the constructor property returns:

// function Boolean() { [native code] }

// Syntax
// boolean.constructor
// Return Value
// function Boolean() { [native code] }
let Boolean = true;
let cons = Boolean.constructor;
console.log(cons);