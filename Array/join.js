// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).
let x = [23, 3, 42, 423, "error", "rose"];
let y = x.join(" and ");
//Output
// 23 and 3 and 42 and 423 and error and rose
console.log(y);