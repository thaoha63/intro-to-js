// String 1: Create a conditional statement that checks if two strings are equal. 
// Include an if and else statement. Create an alert() that gives feedback based on the string defined. Test your statement with different strings to make sure both alerts work.

var string1 = "Apple";
var string2 = "Banana";

// Check if the two strings are equal
if (string1 === string1) {
    alert("The strings are equal: " + string1);
} else (string1 === string 2) {
    alert("The strings are not equal. string1: " + string1 + ", string2: " + string2);
}

// String 2: 

var num1 = 2; 
var num2 = 5;

if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
} else if (num1 < num2) {
    alert(num1 + " is less than " + num2);
} else {
    alert(num1 + " is equal to " + num2);
}

// String 3: 

function concatenateArrayStrings(arr) {
    var concatenatedString = arr.join(" ");
    return concatenatedString;
}

var greetings = ["What's", "Up"];
var result = concatenateArrayStrings(greetings);
console.log(result);

// String 4: Number Type

function checkNumber(number) {
    if (typeof number !== 'number') {
        console.log("The input is not a valid number.");
    } else if (Number.isInteger(number)) {
        console.log("The number is an integer.");
    } else if (Number.isFinite(number) && number % 1 !== 0) {
        console.log("The number is a decimal value.");
    } else if (number === 0) {
        console.log("This is zero.");
    } else {
        console.log("The number is a fraction.");
    }
}

// String 5: Create an array of strings and use random() to select random entries and add them to a sentence, printing the result to the console.

function getRandomHouse() {
  const houses = [
    "This is Mr. White House",
    "This is Clinton's House on the Clinton Street",
    "This is Kate House on the Kate Street",
    "This house is not in Wonderland City"
  ];

  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
}

console.log(getRandomHouse());
console.log(getRandomHouse());
console.log(getRandomHouse());
console.log(getRandomHouse());





