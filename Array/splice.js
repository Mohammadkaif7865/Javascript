// Definition and Usage
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.
// Syntax
// array.splice(index, howmany, item1, ....., itemX)
// Parameters
// Parameter	Description
// index	Required.
// The position to add/remove items.
// Negative value defines the position from the end of the array.
// howmany	Optional.
// Number of items to be removed.
// item1, ..., itemX	Optional.
// New elements(s) to be added.
let arr = ["Apple", "Mango", "Orange", "banana", "lichi"];
let y = arr.splice(2, 0, "Kiwi", "Peach", "Guava");
console.log(y, arr);
//An empty array because we don't delete any element
// [] [
//     'Apple',  'Mango',
//     'Kiwi',   'Peach',
//     'Guava',  'Orange',
//     'banana', 'lichi'
//   ]