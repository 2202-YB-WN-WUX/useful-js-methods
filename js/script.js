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
    // console.log(num1 + num2);
}
addTwoNumbers(1, 2);

// Activity:
// Prompt the user using a prompt(), for a string (name).
// Using an arrow function, show an alert message.
// The message will say Hello [name].

let greeting = (name) => {
    alert(`Hello ${name}`);
}

// let userName = prompt("Enter your name");

// greeting(userName);

// Js object methods

// const leadActor = {
//     firstName: "Robert",
//     lastName: "Pattinson",
//     fullName: function () {
//         console.log(this.firstName + this.lastName);
//     }
// }

// leadActor.fullName();

const body = document.getElementById("body");
const h1 = document.getElementById("h1");
let darkModeActive = false;
const darkModeSwitch = document.getElementById("darkmode-switch");

const darkMode = {
    // our dark mode app
    darkBgColor: "black",
    darkTextColor: "white",
    normalBgColor: "white",
    normalTextColor: "black",
    on: function () {
        console.log("you turned on dark mode");
        body.style.backgroundColor = this.darkBgColor;
        h1.style.color = this.darkTextColor;
        darkModeActive = true;
    },
    off: function () {
        body.style.backgroundColor = this.normalBgColor;
        h1.style.color = this.normalTextColor;
        darkModeActive = false;
    }
}

darkModeSwitch.onclick = () => {
    if (darkModeActive == false) {
        darkMode.on();
    } else {
        darkMode.off();
    }
}

// Switch
// Boolan values can either be true or false
// In other words, off or on.

// let hungry = true;

// if (hungry == true) {
//     console.log("You're feeling hungry.");
// } else {
//     console.log("You're feeling full.");
// }

// switch (hungry) {
//     case true:
//         console.log("You're feeling hungry.");
//         break;
//     case false:
//         console.log("You're feeling full.");
//         break;
// }

// Example 2

// let stars = 1;

// switch (stars) {
//     case 1:
//         console.log("This movie sucked");
//         break;
//     case 2:
//         console.log("This movie was really average");
//         break;
//     case 3:
//         console.log("This movie was average");
//         break;
//     case 4:
//         console.log("This movie was good as");
//         break;
//     case 5:
//         console.log("This movie was brilliant");
//         break;
//     default:
//         console.log("Stars not recognised");
//         break;
// }

// Task: 
// use switch to check if a variable, cats, is equal to 0. 
// If it's 0, console.log a message saying: "You have no cats."
// If it's 1, console.log "You are a cat owner."
// If it's 2, console.log "You must love cats."
// If it's anything else, console.log "Cannot compute your cats."

// let cats = 2;
// switch (cats) {
//     case 0:
//         console.log("You have no cats.");
//         break;
//     case 1:
//         console.log("You are a cat owner.");
//         break;
//     case 2:
//         console.log("You must love cats.");
//         break;
//     default:
//         console.log("Cannot compute your cats.");
//         break;
// }

let dogs = 0;

// testing multiple conditions:
// use true in the switch statement
// switch (true) tests whether the cases are true

switch (true) {
    case dogs == 0:
        console.log("You don't own any dogs, my dude or dudette.")
        break;
    case dogs > 0 && dogs <= 3:
        console.log("You're a dog owner.")
        break;
    case dogs > 3 && dogs < 20:
        console.log("You've got heaps of dogs.")
        break;
    case dogs > 100:
        console.log("You're obsessed with dogs!")
        break;
    default:
        console.log("Can't recognise your dogs")
        break;
}


// Activity: create a number input which takes the users age.

// When clicking "submit", check their age with a switch statement.
// If their age is 0, show a message on the DOM which says
// "You're not born yet". 
//If their age is greater than 0 but less than 40, message saying "You're quite young". 
//If their age is over 40 message "You're getting old". If they enter anything else, message saying "Cannot compute age".


const ageInput = document.getElementById("age-input");
const switchBtn = document.getElementById("switch-button");
const messageDiv = document.getElementById("message");
//
switchBtn.onclick = function () {
    let age = ageInput.value;
    let message;
    switch (true) {
        case age == 0:
            message = "You haven't been born yet";
            break;
        case age > 0 && age < 40:
            message = "You're real young";
            break;
        case age >= 40:
            message = "You're getting old";
            break;
        // default is like the else statement
        default:
            message = "Cannot compute age."
    }
    messageDiv.style.marginBottom = "15px";
    messageDiv.innerHTML = message;
}