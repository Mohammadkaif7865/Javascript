let ages = [12, 13, 14, 56, 32, 45, 34, 35, 35, 43, 53, 46, 5, 65, 63, 4, 534];
let x = ages.find(function(age, index, arr) {
    // return index == 2;
    return arr[index + 2] < age;
});
//Any How the find function could not return index it can use index and array but cannot return the index or complete array
// array.find(function(currentValue, index, arr),thisValue)
console.log(x);