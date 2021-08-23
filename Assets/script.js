// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array used to hold user defined characters
var includedChars = [];

// Array for random characters
var randomPassword = [];
//Array for user's generated password
var userPassword = [];


// Constant Object containting available character sets

const charSets = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  symbol: "!@#$%^&*(){}[]=<>/."
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

// Function used to split included character sets into an array.

function stringToArray (charSetsAttribute) {
  includedChars += charSetsAttribute.split("");
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

    // If user selects to include lowercase letters split and add into the array included characters
    if (includeLower) {
      
      stringToArray(charSets.lower);
    }

    var includeUpper = window.confirm("Would you like your password to contain upper letters?")

    // If user selects to include uppercase letters split and add into the array included characters
    if (includeUpper) {
      
      stringToArray(charSets.upper);

    }
    
    var includeNumber = window.confirm("Would you like your password to contain numbers?")

    // If user selects to include numbers split and add into the array included characters
    if (includeNumber) {
      
      stringToArray(charSets.number);

    }

    var includeSymbol = window.confirm("Would you like your password to contain symbols?")

    // If user selects to include symbols split and add into the array included characters
    if (includeSymbol) {

      stringToArray(charSets.symbol);

    }

  } while (!includeLower && !includeUpper && !includeNumber && !includeSymbol);

  // For loop using Math random to access a user defined amount of elements within Array 
  for (var i = 0; i < userPassLength; i++) {
    
    // Do while used to create user password using array while ignoring commas
    do {
      randomPassword = includedChars[Math.floor(Math.random() * includedChars.length)];

    } while (randomPassword === ',')
    
      // Add characters that are not , to user password array
      userPassword += randomPassword;
    

  }
  
// returning user password to be written to HTML
return userPassword;

}
