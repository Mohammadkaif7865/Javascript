// Definition and Usage
// The substr() method extracts a part of a string.

// The substr() method begins at a specified position, and returns a specified number of characters.

// The substr() method does not change the original string.

// To extract characters from the end of the string, use a negative start position.
// Syntax
// string.substr(start, length)
// Parameters
// Parameter	Description
// start	Required.
// The start position.
// First character is at index 0.

// If start is greater than the length, substr() returns "".
// If start is negative, substr() counts from the end of the string.
// length	Optional.
// The number of characters to extract.
// If omitted, it extracts the rest of the string
// Return Value
// Type	Description
// A string	A string containing the extracted part.
// If length is 0 or negative, an empty string is returned.
let str = "My name is Santa and I love spreading love !";
let subString = str.substr(-15, str.length - 1);
// preading love !
// let subString = str.substr(-5, 8);
//ove !
console.log(subString);