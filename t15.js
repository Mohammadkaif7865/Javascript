//Default Parameters
// console.log(mult(2)); In traditional function we can call it anywhere after declaration 

// function mult(a, b = 1) {
//     return a * b;
// }
//Arrow function

// console.log(mult(2)); First define and then call (Fat arrow function)
let mult = (a, b = 1) =>
    ` The multiply is ${ a * b}`;
// return ` The multiply is ${ a * b}`; if you have single line of code in arrow function then no need to return any thing and dont need to use curly braces

console.log(mult(2));