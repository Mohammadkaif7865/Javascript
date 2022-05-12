let x = [23, 4, 33, 4, 54, 6, 457];
x.forEach(double);

function double(currVal, index, arr) {
    arr[index] = currVal * 2;
}
console.log(x);
//It return undefined every time
//It do not change the array length
//It change the elements of the array