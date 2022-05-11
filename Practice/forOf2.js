let str = {
    name: "Mohammad kaif",
    class: "12",
    marks: 456
};
// for (char of str) {
//     console.log(char);
// }
// for of never work for object;
// lets try for in 
for (char in str) {
    // console.log(toString(str[char]));Wrong way to convert into string
    let a = str[char].toString();
    console.log(a);
    for (c in a) {
        console.log(a[c]);
    }
}
//Yes you can make Object variables as string and iterate their characters like a array