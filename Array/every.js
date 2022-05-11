// let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let arr = ["Friday", "Friday", "Friday", "Friday", "Friday", "Friday", "Friday"];
let check = (day) => { return day === "Friday" }
    // let check = function(day) {
    //         return day === "Friday";
    //     }
    // Definition and Usage
    // The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array
console.log(arr.every(check));
//Normal function is Hoisted every time
// function check(day) {
//     return day === "Friday";
// }
// Like all other functions in Javascript, the arrow function is not hoisting the main reason that you cannot call them before initialization. Because hoisting is the by-default action of moving all the declarations at the top of the scope before the execution of code. JavaScript allocates memory for all its variables.
// let check = (day) => { return day === "Friday" }
// Anonymous functions are never hoisted (loaded into memory at compilation). Named functions are hoisted (loaded into memory at compilation). When invoking an anonymous function, you can only call it after the declaration line.
// let check = function(day) {
//     return day === "Friday";
// }
//It do not change the original array and return true if all the value satisfy the condition it do this by making array of result and if one is false then every overall result is false , if every one is true then only overall result is true.