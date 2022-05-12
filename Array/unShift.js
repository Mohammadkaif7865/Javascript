// Definition and Usage
// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.
// Return Value
// Type	Description
// A number	The new length of the array.
let x = [34, 4543, 4534, 6, 5, 5, 654, 65];
let y = x.unshift("Me", "And");
console.log(x, y);