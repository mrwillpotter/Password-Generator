// Assignment Code
var generateBtn = document.querySelector("#generate");




// Random generate arrays
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = ['@', '%', '+', '/', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];



// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Password generator parameter selection - function
function generatePassword() {
var userPassword = [];



// Allows the user to select the password length
let passLength = window.prompt('How many characters do you want in your PASSWORD? *between 8 and 128* ');
while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  alert('Sorry! The password length must be a number between 8 and 128 characters.');
  passLength = window.prompt('How many characters do you want in your PASSWORD? *between 8 and 128* ');
} 



// Allows the user to select the type of characters in the password
let upperChars = window.confirm('Would you like to use upper case letters?');
let lowerChars = window.confirm('Would you like to use lower case letters?');
let numChars = window.confirm('Would you like to use numbers?');
let specChars = window.confirm('Would you like to use special characters?');



// Alerts if user chooses none of the parameters
while (!upperChars && !lowerChars && !numChars && !specChars) {
window.alert ('You MUST choose at least one type of character');
 upperChars = window.confirm('Would you like to use upper case letters?');
 lowerChars = window.confirm('Would you like to use lower case letters?');
 numChars = window.confirm('Would you like to use numbers?');
 specChars = window.confirm('Would you like to use special characters?');
  
}

let passParams = [];

//Concats selected parameters into the generated password
if (upperChars) {
  passParams = passParams.concat(upperCase);
}
if (lowerChars) {
  passParams = passParams.concat(lowerCase);
}
if (numChars) {
  passParams = passParams.concat(numbers);
}
if (specChars) {
  passParams = passParams.concat(specialChars);
}




// Password generator - for loop
for (let index = 0; index < passLength; index++) {
  let randomIndex = (Math.floor(Math.random() * passParams.length)) 
  userPassword += passParams[randomIndex];
}

//Returns newly generated password
return userPassword
}

