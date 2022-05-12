// The sort() sorts the elements of an array.

// The sort() overwrites the original array.

// The sort() sorts the elements as strings in alphabetical and ascending order.
// array.sort(compareFunction)
// compareFunction	Optional.
// A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a-b}
// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// Example:

// The sort function will sort 40 as a value lower than 100.

// When comparing 40 and 100, sort() calls the function(40,100).

// The function calculates 40-100, and returns -60 (a negative value).
let x = [234, 34, 3, 25, 4, 5, 67, 5, 45, 32];
// let y = x.sort();
// output: according to string number ascending or number dictionary logic
// [
//     234, 25, 3, 32, 34,
//       4, 45, 5,  5, 67
//   ] [
//     234, 25, 3, 32, 34,
//       4, 45, 5,  5, 67
//   ]
// let y = x.sort(function(a, b) {
//     return a - b;
// })
// output:
// [
//     3,  4,  5,  5,  25,
//    32, 34, 45, 67, 234
//  ] [
//     3,  4,  5,  5,  25,
//    32, 34, 45, 67, 234
//  ]
let y = x.sort(function(a, b) {
        return b - a;
    })
    // output : 
    // [
    //     234, 67, 45, 34, 32,
    //      25,  5,  5,  4,  3
    //   ] [
    //     234, 67, 45, 34, 32,
    //      25,  5,  5,  4,  3
    //   ]
console.log(x, y);