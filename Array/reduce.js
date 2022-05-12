// Definition and Usage
// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let x = [213, 4, 3, 32, 45];
let y = x.reduce(function(total, currentValue, currentIndex, arr) {
    return total + currentValue;
}, 4); //reduce(function, accumulator initial value)
console.log(y);