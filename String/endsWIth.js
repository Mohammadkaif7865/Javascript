// Definition and Usage
// The endsWith() method returns true if a string ends with a specified string.

// Otherwise it returns false.

// The endsWith() method is case sensitive.

// See also the startswith() method.
// string.endsWith(searchvalue, length)
let str = "Hey! my name is Mohammad kaif , It's great to meet you , bye";
let y = str.endsWith("bye", 15); //It means check the last upto index number 15
//Output : false
// let y = str.endsWith("bye");
// Output :true 
console.log(y);