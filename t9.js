// var num1 = 5;
// var num2 = '5';
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 == num2);  it check characters on string to the number
// console.log(num1 === num2); // It check value with the data the data types
// function isLeap_year(year) {
//     if ((year % 4) == 0) {
//         if (year % 100 == 0 && year % 400 != 0) {
//             console.log(`${year} is not a leap year`);
//         } else {

//             console.log(`${year} is a leap year`);
//         }
//     } else {
//         console.log(`${year} is not a leap year`);
//     }
// }
// isLeap_year(2024);
// isLeap_year(2100);
// Truthy and Falsy
// We have total of 5 falsy value in javascript
// 0 , "", undefined, null, false** is falsy value in javascript
if (null) {
    console.log("Omg , we loss the game");
} else {
    console.log("yay , won the game ");
}