// const arr = [4, 9, 49, 64, 25, 36, 81];
// var arr2 = arr.map((currVal) => { return Math.sqrt(currVal); });
// console.log(arr2);
const arr = [2, 3, 4, 5, 6, 8];
var arr2 = arr.map((currVal) => {
    return 2 * currVal;
}).filter((currVal) => {
    return currVal > 10
}).reduce((acc, currVal) => {
    return acc += currVal;
});
//Chaining of methods map filter reduce
// const arr = [2, 3, 4, 5, 6, 8];
// var arr2 = arr.map((currVal) =>
//     2 * currVal
// ).filter((currVal) =>
//     currVal > 10
// );
console.log(arr2);