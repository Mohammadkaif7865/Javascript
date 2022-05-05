function biodata() {
    let myFirstName = 'Mohammad ';
    console.log(myFirstName);
    if (true) {
        let myLastName = 'Kaif';
        console.log("inner First name: " + myFirstName);
        console.log("inner last name: " + myLastName);
    }
    console.log("Outer Last Name: " + myLastName); //Blocked scope
    console.log("Outer First Name: " + myFirstName);
}
biodata();
// var=>let
//let vs const vs var
//Template Literals(Template strings)