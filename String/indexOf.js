// Definition and Usage
// The indexOf() method returns the position of the first occurrence of a value in a string.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method is case sensitive.
// string.indexOf(searchvalue, start)
let str = "Let show you the demo";
// let index = str.indexOf("demo", 0);
// output : 17
let index = str.indexOf("deme", 0);
// Output : -1

console.log(index);