// Assignment code here
//DOM elements

var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");

//object of functions
var randomFunc = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  symbol: getRandomSymbol(),
};

generateEl.addEventListener("click", clickHandler);

function clickHandler(event) {
  event.preventDefault();
  console.log("button clicked");
  var length = +lengthEl.value; // 8
  var hasLower = lowercaseEl.checked; // true or false, boolean. // true
  var hasUpper = uppercaseEl.checked; // true
  var hasSymbol = symbolEl.checked; // true

  resultEl.placeholder = generatePassword(
    hasLower,
    hasUpper,
    hasSymbol,
    length
  );
}

var length = +lengthEl.value; // 8
var hasLower = lowercaseEl.checked; // true or false, boolean. // true
var hasUpper = uppercaseEl.checked; // true
var hasSymbol = symbolEl.checked; // true

//generate password function
function generatePassword(lower, upper, symbol, length) {
  //1, initialize password variable
  //2. filter out unchecked types
  //3. loop over the length call generator function for each type
  //4. add the final password to the password variable and return it

  let generatedPassword = "";
  var typesCount = lower + upper + symbol; // 3
  var typesArr = [{ lower }, { upper }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  // var typesArr =
  // [
  //      { lower: true},
  //      {  upper: true },
  //      { symbol: true }
  // ]

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      // 0: { lower: true}
      // 1: { upper: true }
      // 3: { symbol: true }
      var funcName = Object.keys(type)[0];
      // 0: funcName = lower
      // 1: funcName = upper
      // 2: funcName = symbol
      generatedPassword += randomFunc[funcName];
      // 0: generatedPassword = o
      // 1: generatedPassword = oF
      // 3: generatedPassword = oF%
    });
  }

  var finalPassword = generatedPassword.slice(0, length);
  console.log("finalPassword", finalPassword);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*()_+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
