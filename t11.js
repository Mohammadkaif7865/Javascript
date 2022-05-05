const display = document.getElementById("m2");
let figure, area = 0;
figure = prompt("Enter the figure name : ");
console.log(figure);
figure = figure.toLowerCase();
switch (figure) {
    case "triangle":
        let height = prompt("Enter the height : ");
        let base = prompt("Enter the base : ");
        area = 0.5 * base * height;
        // console.log(`Area of ${figure} is : ${area}`);
        display.innerHTML = `Area of ${figure} is : ${area}`;
        break;
    case "square":
        let side = prompt("Enter the side : ");
        area = side * side;
        // console.log(`Area of ${figure} is : ${area}`);
        display.innerHTML = `Area of ${figure} is : ${area}`;
        break;
    case "circle":
        let radius = prompt("Enter the radius : ");
        area = PI * radius ** 2;
        // console.log(`Area of ${figure} is : ${area}`);
        display.innerHTML = `Area of ${figure} is : ${area}`;
        break;
    case "rectangle":
        let length = prompt("Enter the length : ");
        let breath = prompt("Enter the breath : ");
        area = length * breath;
        // console.log(`Area of ${figure} is : ${area}`);
        display.innerHTML = `Area of ${figure} is : ${area}`;
        break;
    default:
        // console.log(`Area of ${figure} is : ${area}`);
        display.innerHTML = `Area of ${figure} is : ${area}`;

}