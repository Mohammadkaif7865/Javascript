//Flatten an array  to convert the 3d or 2d array into a single dimensional array
// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value forThe reducer function takes four arguments: 
// Accumulator
// Current value
// Current index
// Source array
// let arr = [23, 43, 23, 32];
// let sum = arr.reduce((accumulator, currVal, index, arr) => {
//     return accumulator += currVal;
// },initial value of accumulator)
let arr = [
    [23, 43, 23],
    [32, 56, 75, 12, 65],
    [234, 45, 23, 12]
];
let sum = arr.map((currVal, index1, arr) => {
    return currVal.reduce((accumulator, currVal2, index2, currVal) => {
        return accumulator += currVal2;
    });
}).reduce((accumulator, currVal, index2, arr) => {
    return accumulator += currVal;
});
//Wow Done by myself

console.log(sum);
//concat()	Joins two or more arrays, and returns a copy of the joined arrays
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key/value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// forEach()	Calls a function for each array element
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// map()	Creates a new array with the result of calling a function for each array element
// pop()	Removes the last element of an array, and returns that element
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds/Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array