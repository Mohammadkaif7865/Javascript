// Difference for..in and for..of:
// Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

// for..in iterates over all enumerable property keys of an object
// for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
    console.log(arr[elKey]);
}
//Direct address access

// elValue are the property values
for (let elValue of arr) {
    console.log(elValue)
}
//Direct value access