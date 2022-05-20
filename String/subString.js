// Definition and Usage
// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0.S

// Syntax
// string.substring(start, end)
// Parameters
// Parameter	Description
// start	Required.
// Start position.
// First character is at index 0.
// end	Optional.
// End position (up to, but not including).
// If omitted: the rest of the string.
// Return Value
// Type	Description
// A string	A string containing the extracted characters.
let str = "Spread love Kill hate";
let substring = str.substring(3, 7);
//ead 
console.log(substring);