//Type conversion and type coercion
let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);
let booleanVar = true;
booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);
let date = String(new Date());
console.log(date, typeof date);
let arr = [12, 44, 43, 34, 23];
console.log(arr, typeof arr, arr.length);
arr = String([12, 44, 43, 34, 23]);
console.log(arr, typeof arr, arr.length);
let i = true;
console.log(i.toString()); //toString method
let stri = Number("234352");
// stri = Number("2343a52");
stri = Number(true);
console.log(stri, typeof stri);
let number = parseInt("234.354"); // also parse float
let number2 = parseFloat("234.354"); // also parse float
//to fix to control the significant figure after decimal
console.log(number, typeof number);
console.log(number2.toFixed(4), typeof number2);
//Type coercion
let mystr = "619";
let mynum = 34;
console.log(mystr + mynum); //By default number will get converted in string and get concatenated to the string
console.log(Number(mystr) + mynum); //By default number will get converted in string and get concatenated to the string