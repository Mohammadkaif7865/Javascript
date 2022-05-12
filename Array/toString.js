// Definition and Usage
// The toString() method returns a string with array values separated by commas.

// The toString() method does not change the original array.
let x = [23, 4, 235, 436, "were", 234, 343, 443, "we"];
let y = x.toString();
console.log(x, y);
// Output:
// [
//     23,  4,      235,
//     436, 'were', 234,
//     343, 443,    'we'
//   ] 23,4,235,436,were,234,343,443,we