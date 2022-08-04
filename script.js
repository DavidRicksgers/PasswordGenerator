// string for password contents
let generatePassword = (
) => {
  var passlength = window.prompt(
    "How long do you want your password to be (8-128)", "8"
  )

  if (passlength < 8) passlength = 8
  if (passlength > 128) passlength = 128

  let charCodes = LOWERCASE_CODES;

  var includeuppercase = window.confirm(
    " Do you want to include upper case letters?"
  );

  if (includeuppercase) charCodes = charCodes.concat(UPPERCASE_CODES);

  var includenumber = window.confirm(
    " Do you want to include numbers?"
  );

  if (includenumber) charCodes = charCodes.concat(NUMBER_CODES);

  var includesymbol = window.confirm(
    " Do you want to include symbols?"
  );

  if (includesymbol) charCodes = charCodes.concat(SYMBOL_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < passlength; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
}

// Generating Character Codes
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Character Code Generating Function
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
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
