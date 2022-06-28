// Assignment code here
//DOM elements

//var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercasetEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");
//var clipboardEl = document.getElementById("clipboard");

//object of functions
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercasetEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasNumber,
    hasSymbol,
    hasUpper,
    length
  );
});

//generate password function
function generatePassword(lower, upper, number, symbol, length) {
  //1, initialize password variable
  //2. filter out unchecked types
  //3. loop over the lenth call generator function for each type
  //4. add the final password to the password variable and return it

  let generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }
  //create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  var finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*()_+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
