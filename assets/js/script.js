// generate password function
function generatePassword() {
  // user length prompt
  var userLength = prompt("Please enter the number of characters needed (8-128):");
  if(userLength > 7 && userLength < 129 ) {
    console.log(userLength);
  } else {
    alert("Please enter a valid number between 8 and 128.");
    generatePassword();
  };

  // lower case confirm
  var userLowerCase = confirm("Do you want to include lower case characters? If so click 'Ok', otherwise click 'Cancel'.");
  if (userLowerCase) {
    lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  } else {lowerCaseString = "";
  };
  console.log(lowerCaseString);

  // upper case confirm
  var userUpperCase = confirm("Do you want to include upper case characters? If so click 'Ok', otherwise click 'Cancel'.");
  if (userUpperCase) {
    upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {upperCaseString = "";
  };
  console.log(upperCaseString)

  // numeric characters confirm
  var userNumericChar = confirm("Do you want to include numeric characters? If so click 'Ok', otherwise click 'Cancel'.");
  if (userNumericChar) {
    numericString = "1234567890";
  } else {numericString = "";
  };
  console.log(numericString);

  // special characters confirm
  var userSpecialChar = confirm("Do you want to include special characters? If so click 'Ok', otherwise click 'Cancel'.");
  if (userSpecialChar) {
    specialString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  } else {specialString = "";
  };
  console.log(specialString);

  if (
    !userLowerCase && 
    !userUpperCase && 
    !userNumericChar && 
    !userSpecialChar) 
    {
      alert("You must choose at least one valid character set. Please try again.");
      generatePassword();
  } else {console.log("working");
  }

  // create password characters array
  var passwordString = lowerCaseString + upperCaseString + numericString + specialString;
  console.log(passwordString);

  // create empty variable for password
  var newPassword = "";

  // for loop to create password
  for (var i = 0; i < userLength; i += 1){
    newPassword += passwordString[Math.floor(Math.random() * passwordString.length)];
  }

  // result
  console.log(newPassword);
  return(newPassword);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
