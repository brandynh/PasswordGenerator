// Assignment Code
var generateBtn = document.querySelector("#generate");
var includedChars = [];

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
  
  // Do while runs until valid information is entered 
 
 do {
    var userPassLength = window.prompt("How many characters would you like to include in your password? Must be between 8 and 128 characters.");
    
    if (userPassLength < 8 || userPassLength > 128 || isNaN(userPassLength)) {

      alert("Please enter a valid value.");
    }

  } while (userPassLength < 8 || userPassLength > 128 || isNaN(userPassLength));




}

