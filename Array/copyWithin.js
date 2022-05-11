let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// console.log(arr.copyWithin(4, 0, 2));
let x = arr.copyWithin(4, 0, 2);
console.log(arr);
console.log(x);
//arr.copyWithin(4, 0, 2) this statement means that slice the array from index zero to one and start pasting it from index 4
// Definition and Usage
// The copyWithin() method copies array elements to another position in the array.

// This point show us that it change the original array => The copyWithin() method overwrites the existing values.
//This function will not change the length of he original array
// The copyWithin() method does not add items to the array.
//It change the original array values.