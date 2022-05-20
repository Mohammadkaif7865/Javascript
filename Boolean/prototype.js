// Definition and Usage
// prototype allows you to add new properties and methods to booleans.

// prototype is a property available with all JavaScript objects.

// Syntax
// Boolean.prototype.name = value
// Warning
// You are not advised to change the prototype of an object that you do not control.

// You should not change the prototype of built in JavaScript datatypes like:

// Numbers
// Strings
// Arrays
// Dates
// Booleans
// Function
// Objects
// Only change the prototype of your own objects.
Boolean.prototype.myColor = function() {
    if (this.valueOf() == true) {
        return "green";
    } else {
        return "red";
    }
};
let x = false;
console.log(x.myColor());