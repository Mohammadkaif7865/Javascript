// The Array.from() method returns an array from any object with a length property.
// Array.from(object, mapFunction, thisValue)
// The Array.from() method returns an array from any iterable object
//this function do not change the original array
// let str = "wetwertsdgery";
// let str = {
//     my: "yr",
//     arr: [23, 43, 24],

// }
let str = [23, 34, 23, 45, 55, 76];
let y = Array.from(str);
console.log(y);

// Output
// [
//     'w', 'e', 't', 'w',
//     'e', 'r', 't', 's',
//     'd', 'g', 'e', 'r',
//     'y'
//   ]
// let y = Array.from(str, obj => obj == 'e');
//Output
// [
//     false, true,  false,
//     false, true,  false,
//     false, false, false,
//     false, true,  false,
//     false
//   ]