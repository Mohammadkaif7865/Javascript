// Definition and Usage
// The lastIndexOf() method returns the last index (position) of a specified value.

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() starts at a specified index and searches from right to left.

// By default the search starts at the last element and ends at the first.

// Negative start values counts from the last element (but still searches from right to left).
let x = [234, 235, 34, 634, 75, 7, 58, 6, 857, 864745, 646, 6, 34];
let z = x.indexOf(6);
let y = x.lastIndexOf(6)
console.log(y, z);
// Output : 11 7