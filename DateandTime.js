//Date and time
//Date Methods
//Javascript Date Objects represent a single moment in time in a platform - independent format. Date objects contain a number that represent milliseconds since 1 january 1970 UTC.
// Creating Date objects
// There are 4 ways to create a new date objects :
// new Date();
// new Date(year, month, day, hour, minutes, seconds, milliseconds);
// // It takes seven arguments
// new Date(milliseconds);
// // We cannot avoid month section
// new Date(date string);
//new Date()
// Date object are created with the new Date() constructor
// let date = new Date().toLocaleString();
// let date = new Date(); // It does not seem to be properly formatted
// let date = new Date().toString();
// console.log(date);
// console.log(Date.now()); //It return the milliseconds since the 1 jan 1970 00:00:00
// console.log(Date.now() / (365 * 24 * 60 * 60 * 1000));
// var d = new Date(2015, 3, 5, 10, 30, 30, 300);
// var d = new Date(2015, 3, 5);
// var d = new Date();
// console.log(d.toLocaleString());
//new Date(date string);
//creates a new date object from a date string
// var d = new Date("May 7, 2022 11:50:45");
// console.log(d);
// console.log(d.toLocaleString());
// console.log(d.toString());
// console.log(Date.now());
// var d = new Date(0);
// var d = new Date(86400000 * 2);
// console.log(d.toLocaleString());
// console.log(Date(1651816427592));
//Dates Methods
// const currDate = new Date();
// //How to get individual date
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());
//Time Methods
// const currTime = new Date();
// //How to get individual date
// console.log(currTime.getTime());
// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());
// const currTime = new Date();
// //How to get individual date
// // console.log(currTime.setTime(5));
// console.log(currTime.setHours(5));
// console.log(currTime.setMinutes(5));
// console.log(currTime.setSeconds(5));
// console.log(currTime.setMilliseconds(5));
//only time
let a = new Date().toLocaleTimeString();
//only date
let b = new Date().toLocaleDateString();
//Date and time Both
let c = new Date().toLocaleString();
console.log(a);
console.log(b);
console.log(c);