    // var userName = prompt("What's your name?");
	// var confirmCats = confirm("Do you like cats?");

  var yourName = '';
  //fetch the elements we created in html, save to a variable for future use
  var inputName = document.querySelector('#q_your_name')
  var nameElement = document.querySelector('#yourName')
  var checkbox1 = document.querySelector('#checkbox1')
  var catInfo = document.querySelector('#catInfo')
  var checkbox2 = document.querySelector('#checkbox2')
  var petType = document.querySelector('#petType')
  var yourCat = document.querySelector('#yourCat')
  var checkbox3 = document.querySelector('#checkbox3')
  
  var catName = "Meeses";
var catType = "Tuxedo Cat";
  var catAge = 5;
  var petIsCat = true;
  
  //on keyboard key press up EVENT
  inputName.onkeydown = (eventOutput) => {
      console.log(eventOutput)
          //remember to looks up ASCII table for number associated to letters
          //if the key press is a letter A-z/a-z
          if(eventOutput.keyCode >= 65 && eventOutput.keyCode <=90){
              //add the letter pressed to our variable
              yourName += eventOutput.key
              //update the html element to display the value every time we add new value to the variable
              nameElement.innerHTML = yourName
          }
  };

  //on click of the checkbox
  checkbox1.onclick = function(eventOutput){
      //console.log(eventOutput)
      //.checked returns a value of either true or false
      //if checkbox is checked (has true value)
      if(checkbox1.checked) {
          //display a message with cat's name, type, age
          catInfo.innerHTML = `My cat ${catName}, a ${catType}, is ${catAge} years old!`
      }
      else {
          catInfo.innerHTML = `You don't get my cat's information :(`
      }
  };

  //on click of checkbox if your pet is a cat
  checkbox2.onclick = function(eventOutput){
      //.checked returns a value of either true or false for checkbox
      //if checkbox checked (it has a true value)
      if(checkbox2.checked) {
          //if true display "my pet is a cat" otherwise "pet is not a cat"
          petType.innerHTML = `My pet is a cat!`
      }
      else{
          petType.innerHTML=`My pet is not a cat.`
      }
  };

  checkbox3.onclick = function(eventOutput) {
          //console.log(eventOutput)
          //remember to looks up ASCII table for number associated to letters
          //if the key press is a letter A-z/a-z
          if(checkbox3.checked) {
              yourCat.innerHTML = `Your cat is older than ${catName}`
              document.querySelector(".catimage").innerHTML=""
              var image=document.createElement("IMG")
              image.setAttribute("src", "https://images.unsplash.com/photo-1512270154623-1c2f9502f65d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"); 
              document.querySelector(".catimage").appendChild(image);  
          }
          else {
              yourCat.innerHTML = `Your cat is younger than ${catName}`
              document.querySelector(".catimage").innerHTML=""
              var image=document.createElement("IMG")
              image.setAttribute("src", "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
              document.querySelector(".catimage").appendChild(image);     
          }
  };
  


  
  

// if (petAge !== 7) {
// alert("My pet is not 7 years old");
// }

// if (petAge === 5) {
// alert("My pet is 5 years old");
// }
// else if (petAge < 5) {
// alert("My pet is less than 5 years old");
// }
// else if (petAge > 5) {
// alert("My pet is older than 5 years old");
// }

// // logs the value in your chrome de
// veloper console
// console.log("Welcome to our page " + userName);

// var catAge = prompt("How old is your cat?");

// // Won't work as expected
// alert(catAge + 2);

// // Works as expected
// alert(parseInt(catAge) + 2);