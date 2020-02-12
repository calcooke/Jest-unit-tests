exports.generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

exports.validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

//Validate the name and age in the input fields

exports.checkAndGenerate = (name, age) => {

  if (
    !validateInput(name, true, false) ||
    !validateInput(age, false, true)
  ) {
    return false;  //return false if validation fails
  }

  // If we make if past the if block, then we can pass the checked name and age into
  // generate text

  return generateText(name, age);
}