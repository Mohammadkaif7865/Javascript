// Definition and Usage
// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

// The lastIndexOf() method searches the string from the end to the beginning.

// The lastIndexOf() method returns the index from the beginning (position 0).

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() method is case sensitive.
// string.lastIndexOf(searchvalue, start)
let x = "Haha! you are such a loser and never make any sense !";
// let index = x.lastIndexOf("never");
//Output : 31
let index = x.lastIndexOf("never", 30);
// output : -1
console.log(index);