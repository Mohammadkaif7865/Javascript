const array1 = [23, 45, 45, 74, 32, 23, 65, 22];
// let array2 = array1.map((element, index, array) => { return element < 33; });
//return a new array containing the results of calling a function on every element in this array
//Map method basically store all the return of function for every element
let arr2 = array1.map((element, index, array) => { return `Index no = ${index} and the value is ${element} belong to ${array}`; });
console.log(arr2);
// [
//     true,  false,
//     false, false,
//     true,  true,
//     false, true
//   ]