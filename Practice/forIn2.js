let x = {
    name: "Mohammad kaif",
    Grade: "B",
    marks: [23, 34, 42, 35, 23, 35, 25],
    result: "Pass",
}
for (value in x) {
    for (char in x[value]) {
        console.log(x[value][char]);
    }
}