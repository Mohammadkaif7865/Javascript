// Definition and Usage
// The localeCompare() method compares two strings in the current locale.

// The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

// The current locale is based on the language settings of the browser.
// string.localeCompare(compareString)
let str1 = "ab";
let str2 = "cd";
console.log(str1.localeCompare(str2));
//This function act as a dictionary of strings 
//If the strings are sorted then if return -1 
//If the strings are not sorted according to the dictionary then it returns 1;
//If the strings are equal then it returns 0
//It also compare the locale language of the region