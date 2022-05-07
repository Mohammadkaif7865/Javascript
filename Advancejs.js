//Event Propagation
//1> Event Bubbling (Default)
//2> Event Capturing
//To stop teh propagation use event.stopPropagation();
//For Capturing use DOM.addEventListener('click', function, true for capturing and by default false for bubbling)
//You can pass function as an argument and declared as parameters
//When a function take another function as an argument that function is called higher order function and the passed function is called call back function
//Lexical environment
//Lexical scope
//Closure{ inner function + inner variables + lexical environment access}
//Synchronous and asynchronous Js
//Sync means line by line code execution with wait(one at a time)
//Async means parallel code execution without wait(multiple at a time);
//Event Loop loop of setTimeOut function from execution context to WEB API and wait and to message queue and then again in Execution Context
//Function Currying
// var sum = (num1) => {
//     return function(num2) {
//         return function(num3) {
//             return num3 + num2 + num1;
//         }
//     }
// };
// by fat arrow function
var sum = (num1) =>
    (num2) => (num3) => num1 + num2 + num3;

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

// Currying doesn’t call a function. It just transforms it.
console.log(sum(1)(4)(5));