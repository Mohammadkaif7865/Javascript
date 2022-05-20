// Definition and Usage
// The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.

// The locale is based on the language settings of the browser.

// The toLocaleLowerCase() method does not change the original string.

// The toLocaleLowerCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).
// Syntax
// string.toLocaleLowerCase()
// Parameters
// NONE
// Return Value
// Type	Description
// A string	A new string converted to lowercase according to current locale.
let str = "Hey how are you.";
let all_lower = str.toLocaleLowerCase();
console.log(all_lower);
//hey how are you.