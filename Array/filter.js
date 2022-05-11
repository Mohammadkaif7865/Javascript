//Filter method of the array
let ages = [32, 34, 12, 34, 45, 22, 23, 21, 25, 26, 27, 28, 29, 17, 16, 18, 19, 20, 13, 14, 15];
let permit = ages.filter(teen = (age) => age >= 18);
console.log(ages);
console.log(permit);
//The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.
//The length of new array could be smaller than or equals to the length of original array.