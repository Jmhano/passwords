// Assignment code here


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

var characterAmountNumber= 1;
var inludeUppercase= 1;
var includeLowercase= 1;
var includeSymbol= 1;

// Write password to the #password input
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "",

  passwordText value = password;

}

//copy the password button 

function copyPassword() {
  var copyText = document.querySelector(#password);
  copyText.select();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
