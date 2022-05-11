let arr1 = [344, 432, "Today", "345"];
let arr2 = ["3", "Tune", 25, 43];
let arr3 = [3, 52, "Monday", 345];
let arr4 = [234, 234, 23, 42, 3, 234, 23];
let c = arr1.concat(arr2, arr3, arr4); //You can store in another store in variable
arr1 = arr1.concat(arr2, arr3, arr4); // Or you can simply use the earlier variables to store
console.log(c);
console.log(arr1);
//It also dont change the original array until or unless you assign the returned array into the original array
//It return a new array but old one remain same
//It return the concatenated array
let d = (arr1 + arr2 + arr3 + arr4);
console.log(d);