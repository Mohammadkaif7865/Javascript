// Definition and Usage
// The slice() method extracts a part of a string.

// The slice() method returns the extracted part in a new string.

// The slice() method does not change the original string.

// The start and end parameters specifies the part of the string to extract.

// The first position is 0, the second is 1, ...

// A negative number selects from the end of the string.
// Syntax
// string.slice(start, end)
// Parameters
// Parameter	Description
// start	Required.
// The start position.
// (First character is 0).
// end	Optional.
// The end position (up to, but not including).
// Default is string length.
// Return Value
// Type	Description
// A string	The extracted part of the string.
let str = "Here we go , i don't know that was coming so i decided to quit";
let sliced = str.slice(3, 25);
//e we go , i don't know
console.log(sliced);