//It is series of same type or different type of data in json format
// It is used store multiple values in single variable
//Type of array is Object
var data = [
    ["shyam ", "male", 4253463, "New Delhi"],
    ["Kundan", "male", 4566333, "Mumbai"],
    ["Guddu", "male", 4566533, "Kolkata"],
    ["Mohan", "male", 4566783, "Pune"],
    ["Sonu", "male", 4566393, "Ludhiana"]
];
//For loop simple wala
// for (var i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {

//         console.log(data[i][j]);
//     }
// }
// console.log(data[data.length - 1]);
//For in loop
// for (let element in data) {
//     console.log(data[element]); //Here element will be the element address
// }
// for of loop
// for (let element of data) {
//     console.log(element); //Here element will be the object 
// }
//For each loop
// data.forEach(function(element, index, array) {
//     console.log(`${element} index is ${index} ${array}`);
// }); no break statement is execute in foreach loop
// data.forEach((element, index, array) => {
//     console.log(`${element} index is ${index} ${array}`);
// });