// let arr = [1, 2, 4, [32, "jeans", "2352", 52],
//     [{ echo: 'Hello', target: "me" }, 3, 4, [234, 2342, "this", 5], 45], 0, 35
// ];
let arr = [
    [324, 323],
    [324, 55, 12, 14],
    [43, 34, 34],
    [34, 77, 86, 45]
];
for (element of arr) {
    // console.log(element);
    for (subE of element) {
        console.log(subE);
    }
}
// for of works for array , string only,