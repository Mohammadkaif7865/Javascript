// Definition and Usage
// The startsWith() method returns true if a string starts with a specified string.

// Otherwise it returns false.

// The startsWith() method is case sensitive.

// See also the endsWith() method.

// Syntax
// string.startsWith(searchValue, start)
// Parameters
// Parameter	Description
// searchValue	Required.
// The string to search for.
// start	Optional.
// Start position. Default is 0.
// Return Value
// Type	Description
// A boolean	Returns true if the string starts with the value.
// Otherwise it returns false.
let str = "Hello guys i am the star of this world.";
let check = str.startsWith("Hello"); //You can use regular expression to check
console.log(check);