// Definition and Usage
// The keys() method returns an Array Iterator object with the keys of an array.

// The keys() method does not change the original array.
let x = [23, 4, 235, 23, 5634, 76, 357, 35, 7, 45, 674, 532, 5];
let keys = x.keys();
// console.log(keys);
for (obj of keys) {
    console.log(obj);
}
// Output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12