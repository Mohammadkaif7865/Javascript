// Definition and Usage
// The replace() method searches a string for a value or a regular expression.

// The replace() method returns a new string with the value(s) replaced.

// The replace() method does not change the original string.

// Syntax
// string.replace(searchValue, newValue)
// Parameters
// Parameter	Description
// searchValue	Required.
// The value, or regular expression, to search for.
// newValue	Required.
// The new value (to replace with).
// Return Value
// Type	Description
// A string	A new string where the specified value(s) has been replaced.
// Note
// If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.

// Read more about regular expressions in our:

// RegExp Tutorial
// RegExp Reference
let x = "Hey you get out off my house and never come back And again and please shut your mouth !?";
// let y = x.replace("and", ",");
//Hey you get out off my house , never come back again and please shut your mouth !?
// let y = x.replace(/and/g, ",");
// Hey you get out off my house , never come back again , please shut your mouth !?
//Hey you get out off my house , never come back And again , please shut your mouth !?
let y = x.replace(/and/gi, ",");
// Hey you get out off my house , never come back , again , please shut your mouth !?
console.log(y);