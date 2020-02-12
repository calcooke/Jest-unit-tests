const { checkAndGenerate, createElement } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');
 
   const outputText = checkAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value
  );

  // checkAndGenerate returns false if the validation fails
  // In this case, the function will break here if !outputText and
  // it wont continue creating the element

  if(!outputText){
    return;
  }

  const userList = document.querySelector('.user-list');
 
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

//Change

// Start the app!
initApp();
