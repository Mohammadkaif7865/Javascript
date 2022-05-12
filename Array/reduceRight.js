// Definition and Usage
// The reduceRight() method executes a reducer function for each array element.

// The reduceRight() method works from right to left.

// The reduceRight() method returns a single value: the function's accumulated result.

// The reduceRight() method does not execute the function for empty elements.
// array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
let x = [12, 23, 43, 54, 65, 1000];
let y = x.reduceRight(function getSum(total, num) {
    return total - num;
});
//Output : 803
// let y = x.reduceRight(function getSum(total, num) {
//     return total - num;
// }, 4000);
//Output : 2803
//If initial value not passed then last element of array will be the accumulator
console.log(y);