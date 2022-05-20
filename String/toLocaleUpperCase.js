// Definition and Usage
// The toLocaleUpperCase() method converts a string to uppercase letters, using current locale.

// The locale is based on the language settings of the browser.

// The toLocaleUpperCase() method does not change the original string.

// The toLocaleUpperCase() returns the same result as toUpperCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).
// Syntax
// string.toLocaleUpperCase()
// Parameters
// NONE
// Return Value
// Type	Description
// A string.	A new string converted to uppercase according to current locale.
let str = "Hello guys How are you ";
let All_upper = str.toLocaleUpperCase();
console.log(All_upper);
//HELLO GUYS HOW ARE YOU