const forEachBtn = document.getElementById("for-each-button");
const vegetableList = document.getElementById("vegetable-list");

// let vegetables = [
//     'carrot',
//     'kumara',
//     'cucumber'
// ]

// forEachBtn.onclick = function () {
//     // console.log("you clicked me")
//     // run a for each method
//     // the for each method will call a function
//     // and this function will use the arguments item and index
//     vegetables.forEach(showVegetable)
// }

// function showVegetable(item, index) {
//     // console.log(index);
//     // console.log(item);
//     vegetableList.innerHTML +=
//         `<p>#${index} - ${item}</p>`
// }

let cars = [
    {
        model: "Toyota",
        km: 12
    },
    {
        model: "Porshe",
        km: 0
    },
    {
        model: "Mitshibushi",
        km: 1200
    }
]

cars.forEach(logCar);

function logCar(item, index) {
    // console.log("This is running three times")
    // console.log(item);
    vegetableList.innerHTML +=
        `
    <h5>${item.model}</h5>
    <p>${item.km}<p>
    `;
}

// Activity:

// Create another property in our cars array.
// Call it the imageURL.
// Render the cars, when the run button is clicked.
// Show the cars, with their images, using CSS grid.

// ------Arrow functions-----
let arrowFunction = () => {
    // stuff here gets run
    return "hello world";
}
console.log(arrowFunction());


// Super simple arrow function
let helloWorld = (x) => x + 2;

// regular function
function regularFunction() {
    // stuff here gets run
}

// This arrow function will add two numbers together 
let addTwoNumbers = (num1, num2) => {
    console.log(num1 + num2);
}
addTwoNumbers(1, 2);

// Activity:
// Prompt the user using a prompt(), for a string (name).
// Using an arrow function, show an alert message.
// The message will say Hello [name].

let greeting = (name) => {
    alert(`Hello ${name}`);
}

let userName = prompt("Enter your name");

greeting(userName);