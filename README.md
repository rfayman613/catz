### Instructions

* Open the js-dissect in Chrome, and observe what happens.

* Read through the code in app.js try and understand what is happening. Console Log things out

* Create a new file script.js
* Paste this code in the file:

  	var userName = prompt("What's your name?");
	var confirmCats = confirm("Do you like cats?");

	var petName = "Meeses";
	var petType = "Tuxedo Cat";
	var petAge = 5;
	var petIsCat = true;

	if (confirmCats) {
	alert(petName + " " + petType + " " + petAge);
	}
	else {
	alert("You don't get my cat's information");
	}

	if (petIsCat) {
	alert("My pet is a cat");
	}
	else {
	alert("My pet is not a cat");
	}

	if (petAge !== 7) {
	alert("My pet is not 7 years old");
	}

	if (petAge === 5) {
	alert("My pet is 5 years old");
	}
	else if (petAge < 5) {
	alert("My pet is less than 5 years old");
	}
	else if (petAge > 5) {
	alert("My pet is older than 5 years old");
	}

	// logs the value in your chrome de
	veloper console
	console.log("Welcome to our page " + userName);

	var catAge = prompt("How old is your cat?");

	// Won't work as expected
	alert(catAge + 2);

	// Works as expected
	alert(parseInt(catAge) + 2);

* Open index.html look at how we are linking script.js to index.html, kind of like what we do for css
* In script.js remove all the prompts, confirms, alerts and only display values on index.html using the selctor / hooks we talked about
* Add some personality to your page with CSS
	* Don't forget you can use CSS frameworks: https://geekflare.com/best-css-frameworks/
* Create a new github repo for this activity and upload the files
	* look into the github desktop application, which makes uploading and updating a lot easier


* **NOTE:** A big part of being a developer is learning on the fly!
