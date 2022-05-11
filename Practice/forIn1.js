let arr = [1, 2, 4, [32, "jeans", "2352", 52],
    [{ echo: 'Hello', target: "me" }, 3, 4, [234, 2342, "this", 5], 45], 0, 35
];
for (oneD in arr) {
    console.log(arr[oneD]);
    // for (twoD in arr[oneD]) {
    //     console.log(arr[oneD][twoD]);
    //     // for (threeD in arr[oneD][twoD]) {
    //     //     console.log(arr[oneD][twoD][threeD]);
    //     // }
    // }
}
// for (key in object) {
//     // code block to be executed
//   }for (variable in array) {
//     code
//   }
// let name = "Mohammad kaif";
// for (x in name) {
//     console.log(name[x]);
// }
//For in works for all string , object, array and JSON