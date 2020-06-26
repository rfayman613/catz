
// Write some Pseudo code
// As a user types in the input #q_cat_name store the value to catName and then display it on the page #catName

// craete a storage holder for the cats name
var catName = '';

// fetch the elements we created in the html, save to a variable for future use
var inputElm = document.querySelector('#q_cat_name')
var catElm = document.querySelector('#catName')
var checkbox = document.querySelector('#checkbox')
var answer = document.querySelector('#answer')

// on keyboard key press up EVENT
inputElm.onkeyup = (eventOutput) => {
  // console.log(eventOutput)

    // every letter has a number associated
    // look up ascii table

    // if the key pressed is a letter A-Z / a-z
      if(eventOutput.keyCode >= 65 && eventOutput.keyCode <=90) {
        // add the letter pressed to our variable
        catName += eventOutput.key 
        // update the html element to display the value every time we add new value to the variable
        catElm.innerHTML = catName
      }
};

// on click of the checkbox
checkbox.onclick = function(eventOutput){
  // console.log(eventOutput)

  //.checked returns a value of either true or false
  // if the checkbox is checked (has value true)
  if(checkbox.checked) {
      // display a message if the user HAS NOT provided their cats name
      if(catName === '') answer.innerHTML = `I am glad you like cats`
      // display a message if the user HAS provided their cats name
      if(catName !== '') answer.innerHTML = `I am so happy for ${catName}`
  } else {
    // if the user does not check the box 
    // display a message to the user about their choice
      answer.innerHTML = 'Too bad you don\'t like cats :('
  }
};

// after any update we always want to redisplay the value in the html to provide immediate feedback to the user
