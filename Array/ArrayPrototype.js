// Create a method that transforms array values into upper case:

// Array.prototype.myUcase = function() {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };
// Use the method on any array:

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.myUcase();
//It is use create methods for array objects
Array.prototype.double = function() {
    for (obj in this) {
        obj = obj * 2;
    }
}
var num = [23, 4, 325, 6, 5, 634];
num.double();
console.log(num);