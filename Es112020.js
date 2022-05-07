//ES2020
//#1 : BigInt
let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
//To go beyond MAX_SAFE_INTEGER we have to use n at the end of number
//example
let newBigInt = BigInt(9007199254740991) + BigInt(436347);
console.log(newBigInt);
console.log(BigInt(2342463754687564635) + BigInt(23524356346457467));
//Nullish ??