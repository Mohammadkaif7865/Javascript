// array.some(function(value, index, arr), this)
// The some() method checks if any array elements pass a test (provided as a function).

// The some() method executes the function once for each array element:

// If the function returns true, some() returns true and stops.
// If the function returns false, some() returns false and stops.
// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.         
let x = [23, 4, 54, 546, 45, 766, 76, 65, 4, 5, 334, 343, 4, 5, 10000];
let y = x.some(function(currVal, index, arr) {
    return currVal > 1000 && index > 3;
})
console.log(y);
// Output: true