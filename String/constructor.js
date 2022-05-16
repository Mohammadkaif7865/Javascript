// Definition and Usage
// The constructor property returns the function that created the String prototype.

// For JavaScript strings the constructor returns:

// function String() { [native code] }
let str = "My name is Lakhan";
let y = str.constructor;
console.log(y);
// Output
// [Function: String]