// Definition and Usage
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.
// array.map(function(currentValue, index, arr), thisValue)
// map() does not change the original array.
let x = [234, 325, 46, 7, 45, 568, 679, 67];
let y = x.map(double);

function double(currentValue, index, arr) {
    return arr[index + 1] + currentValue;
}
console.log(y);