// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// FUNCTIONS

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Constant Object with strings of potential character sets

const charSets = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '1234567890',
  symbol: '!@#$%^&*(){}[]=<>/,.'
}

// Generate password function
function generatePassword() {
  

}

