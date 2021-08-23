// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array used to hold user defined characters
var includedChars = [];

var randomPassword = [];


// Constant Object containting available character sets

const charSets = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  symbol: "!@#$%^&*(){}[]=<>/,."
}


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



// Generate password function
function generatePassword() {
  
  // Do while runs until user enters a valid password length
 
 do {

    var userPassLength = window.prompt("How many characters would you like to include in your password? Must be between 8 and 128 characters.");
    
    if (userPassLength < 8 || userPassLength > 128 || isNaN(userPassLength)) {

      alert("Please enter a valid value.");
    }

  } while (userPassLength < 8 || userPassLength > 128 || isNaN(userPassLength));

  // Do while runs until at least one of the password criteria is selected

  do {

    var includeLower = window.confirm("Would you like your password to contain lowercase letters?")

    // If user selects to include lowercase letters split and add into the array includedCharacters
    if (includeLower) {
      
      includedChars += charSets.lower.split('');
    }

    var includeUpper = window.confirm("Would you like your password to contain upper letters?")

    // If user selects to include uppercase letters split and add into the array includedCharacters
    if (includeUpper) {
      
      includedChars += charSets.upper.split('');

    }
    // If user selects to include numbers split and add into the array includedCharacters
    var includeNumber = window.confirm("Would you like your password to contain numbers?")


    if (includeNumber) {
      
      includedChars += charSets.number.split('');

    }

    var includeSymbol = window.confirm("Would you like your password to contain symbols?")

    // If user selects to include symbols split and add into the array includedCharacters
    if (includeSymbol) {

      includedChars += charSets.symbol.split('');

    }

  } while (!includeLower && !includeUpper && !includeNumber && !includeSymbol);


  for (var i = 0; i < userPassLength; i++) {
     randomPassword += includedChars[Math.floor(Math.random() * includedChars.length)];
     

  }

return randomPassword;

}
