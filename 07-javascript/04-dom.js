// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output = document.querySelector('.output');

//console.log(copy);

// add an event listener on the target element
copy.addEventListener('click', handleClick);

// callback function to handle event
function handleClick(event){
    console.log('click event', event);
    console.log(userInput.value);
    console.log(output);
    output.textContent = userInput.value;
};

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
