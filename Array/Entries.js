let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let y = arr.entries();
console.log(arr.entries());
for (value of y) {
    console.log(value);
}
console.log(arr);
//It dont change the original array and return the array of array of index and value at that index
//Basically its tells us that at which index number which entry is given
//Output
// [ 0, 'Monday' ]
// [ 1, 'Tuesday' ]
// [ 2, 'Wednesday' ]
// [ 3, 'Thursday' ]
// [ 4, 'Friday' ]
// [ 5, 'Saturday' ]
// [ 6, 'Sunday' ]