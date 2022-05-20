// Definition and Usage
// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.
// Syntax
// string.split(separator, limit)
// Parameters
// Parameter	Description
// separator	Optional.
// A string or regular expression to use for splitting.
// If omitted, an array with the original string is returned.
// limit	Optional.
// An integer that limits the number of splits.
// Items after the limit are excluded.
// Return Value
// Type	Description
// Array	An array containing the splitted values.
let str = "Please dont tell anyone that i slapped you and you were crying for that and please control your emotions";
let str_Component = str.split(" ", 10);
console.log(str_Component);