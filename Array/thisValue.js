//This key words
//Lesson!: This is keyword for oject which have current in
let s = 0;
let c = 9;
let obj = {
    s: 5,
    c: 0,
    show() {
        console.log(this.c, this.s);
        console.log(c, s);
    }
    //0 5
    // 9 0
};
console.log(obj.show());