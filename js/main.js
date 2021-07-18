let userInput = document.getElementById("binary-number");
let result = document.getElementById("result");
const submitButton = document.getElementById("submit-button");

const checkBinary = (value) => {
  const isBinary = [...value].every((n) => n === "0" || n === "1");
  if (value < 0 || !isBinary) {
    return false;
  } else {
    return value;
  }
};

const binaryToDecimal = (binary) => {
  return parseInt(binary, 2);
};

const showResult = () => {
  if (checkBinary(userInput.value)) {
    result.innerHTML = binaryToDecimal(userInput.value);
  } else {
    userInput.value = "";
    alert("Incorrect Input, please type a binary number");
  }
};

submitButton.addEventListener("click", showResult);
