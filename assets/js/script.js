// Assignment code here 

// confirm number of characters user needs
// function getCharacterLength() {
//   var userLength = prompt("Please enter the number of characters needed (8-128):");
//   userLength = parseInt(userLength);
//   console.log(typeof(userLength));
//   if(userLength < 8 || userLength > 128) {
//     alert("Please enter a valid input.")
//     getCharacterLength();
//   } else{
//     console.log("User defined length is: " + userLength);
//   };
// }

// // confirm if user needs LOWERCASE characters
// function getLowercaseConfirm() {
//   var userLowercase = prompt("Are lowercase characters needed? (Enter 'Y' or 'N')");
//   userLowercase = userLowercase.toLowerCase();
//   if(userLowercase === "y" || userLowercase === "n"){
//     console.log("User defined lowercase: " + userLowercase);
//   } else{
//     alert("Please enter a valid input.");
//     getLowercaseConfirm();
//   };
// };

// // confirm if user needs UPPERCASE characters
// function getUppercaseConfirm() {
//   var userUppercase = prompt("Are uppercase characters needed? (Enter 'Y' or 'N')");
//   userUppercase = userUppercase.toLowerCase();
//   if(userUppercase === "y" || userUppercase === "n"){
//     console.log("User defined uppercase: " + userUppercase);
//   } else{
//     alert("Please enter a valid input.");
//     getUppercaseConfirm();
//   };
// };

// // confirm if user needs NUMERIC characters
// function getNumericConfirm() {
//   var userNumeric = prompt("Are numeric characters needed? (Enter 'Y' or 'N')");
//   userNumeric = userNumeric.toLowerCase();
//   if(userNumeric === "y" || userNumeric === "n"){
//     console.log("User defined uppercase: " + userNumeric);
//   } else{
//     alert("Please enter a valid input.");
//     getNumericConfirm();
//   };
// };

// // confirm if user needs NUMERIC characters
// function getSpecialConfirm() {
//   var userSpecial = prompt("Are special characters needed? (Enter 'Y' or 'N')");
//   userSpecial = userSpecial.toLowerCase();
//   if(userSpecial === "y" || userSpecial === "n"){
//     console.log("User defined uppercase: " + userSpecial);
//   } else{
//     alert("Please enter a valid input.");
//     getSpecialConfirm();
//   };
// };


function generatePassword() {
  // user length prompt
  var userLength = prompt("Please enter the number of characters needed (8-128):");
  if(userLength < 8 || userLength > 128 ) {
    alert("Please enter a number between 8 and 128.")
    generatePassword();
  } else {console.log(userLength)
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

  // create password characters array
  var passwordString = lowerCaseString + upperCaseString + numericString + specialString;
  console.log(passwordString);

  var newPassword = "";

  // for loop to create password
  for (var i = 0; i < userLength; i += 1){
    newPassword += passwordString[Math.floor(Math.random() * passwordString.length)];
  }
  console.log(newPassword);
  
};

generatePassword();

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
