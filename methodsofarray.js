//Methods of Array
//Searching and filter
//Whenever a function add some thing to the array it return the increased length of the array
var employees = ["Sonu", 'Arav', "Monu", "Rohan", "Sumit", "Miloo", "Raam"];
var prices = [233, 324, 263, 456, 678, 456, 756, 975, 468];
var num = [100, 20, 1, 201, 30, 340, 50];
//1 : indexof(); case sensitive(cs) forward search(fs)
//Returns the first (least) index of an element within the array equal to an element or -1 if not found starting from index 0
//2 :lastIndexof(); cs backward search (bs)
//Returns the Last (greatest) index of an element within the array equal to an element or -1 if not found starting from index last element
//3 :includes(); cs fs return the Boolean value
//4 :find(); cs fs return the first element from the beginning matching the condition
//5 :FindIndex(); cs fs returns index number
//6 :Filter(); cs fs return a array
//7 :sort(); return the sorted array
//# CRUD method Create read update and delete
//8 :push(); return the new length of the array add one or more element
//9 :unshift(); return the new length of the array add at the first position one or more
//10 :pop(); return the popped element  of the array remove only one element
//11 :shift(); remove the first element from the array and return the pop element
//12 :splice(); Add and remove elements from an array return an empty array

// console.log(employees.indexOf("sonu", 0)); // forward search
// console.log(employees.lastIndexOf("sonu", 4)); // backward search
// console.log(parseInt("123wwdfg"));
// console.log(employees.includes("sonu", 1));
// var findElement = prices.find((currVal) => {
//         return currVal < 400;
//     })
// var findElement = prices.find((currVal) => 
//     currVal < 400
// );// return undefined when not found
// var findElement = prices.findIndex((currVal) =>
//     currVal < 200
// ); // return -1 when not found
// console.log(findElement);
// var newarray = prices.filter((currVal) => { return currVal < 300; });
// var newarray = prices.filter((currVal) => currVal < 300);
// console.log(newarray);

// var newarray = employees.sort();
// sort work after converting the data in string and string remains string
// var newarray = num.sort();
// employees.push("Gonu", "fareen");
// employees.unshift("Gonu", "fareen");
// console.log(employees.unshift("Gonu", "fareen"));
// console.log(employees.unshift("Gonu", "fareen"));
// employees.pop();
// console.log(employees.pop());
// employees.shift();
// console.log(employees.shift());
// employees.splice(employees.length, 0, "Rony");
// console.log(employees.splice(employees.length, 0, "Rony")); //Add
// console.log(employees);
// var newEmployees = employees.splice(employees.indexOf("Miloo"), 2, "Rony", "fatima"); //Remove and add
//Number of element deleting could be infinity
// console.log(employees);
// console.log(newEmployees);
// console.log(employees);