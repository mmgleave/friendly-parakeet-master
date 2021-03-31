// Assignment code here

// confirm number of characters user needs
function getCharacterLength() {
  var userLength = prompt("Please enter the number of characters needed (8-128):");
  userLength = parseInt(userLength);
  console.log(typeof(userLength));
  if(userLength < 8 || userLength > 128) {
    alert("Please enter a valid input.")
    getCharacterLength();
  } else{
    console.log("User defined length is: " + userLength);
  };
}

// confirm if user needs LOWERCASE characters
function getLowercaseConfirm() {
  var userLowercase = prompt("Are lowercase characters needed? (Enter 'Y' or 'N')");
  userLowercase = userLowercase.toLowerCase();
  if(userLowercase === "y" || userLowercase === "n"){
    console.log("User defined lowercase: " + userLowercase);
  } else{
    alert("Please enter a valid input.");
    getLowercaseConfirm();
  };
};

// confirm if user needs UPPERCASE characters
function getUppercaseConfirm() {
  var userUppercase = prompt("Are uppercase characters needed? (Enter 'Y' or 'N')");
  userUppercase = userUppercase.toLowerCase();
  if(userUppercase === "y" || userUppercase === "n"){
    console.log("User defined uppercase: " + userUppercase);
  } else{
    alert("Please enter a valid input.");
    getUppercaseConfirm();
  };
};

// confirm if user needs NUMERIC characters
function getNumericConfirm() {
  var userNumeric = prompt("Are numeric characters needed? (Enter 'Y' or 'N')");
  userNumeric = userNumeric.toLowerCase();
  if(userNumeric === "y" || userNumeric === "n"){
    console.log("User defined uppercase: " + userNumeric);
  } else{
    alert("Please enter a valid input.");
    getNumericConfirm();
  };
};

// confirm if user needs NUMERIC characters
function getSpecialConfirm() {
  var userSpecial = prompt("Are special characters needed? (Enter 'Y' or 'N')");
  userSpecial = userSpecial.toLowerCase();
  if(userSpecial === "y" || userNumeric === "n"){
    console.log("User defined uppercase: " + userSpecial);
  } else{
    alert("Please enter a valid input.");
    getSpecialConfirm();
  };
};

function generatePassword() {
  
}

getCharacterLength();
getLowercaseConfirm();
getUppercaseConfirm();
getNumericConfirm();
getSpecialConfirm();

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
