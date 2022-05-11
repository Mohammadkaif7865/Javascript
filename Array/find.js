let ages = [15, 34, 12, 34, 45, 22, 23, 21, 25, 26, 27, 28, 29, 17, 16, 18, 19, 75, 20, 13, 14, 15];

function isFifty(age, index, arr) {
    if (age >= 80)
        return age;
    else
        return false;
}
let x = ages.find(isFifty);
console.log(x);
// array.find(function(currentValue, index, arr),thisValue)