/** @format */

let convertType = "miles";
let heading = document.querySelector("h1");
let intro = document.querySelector("p");
let answerDiv = document.getElementById("answer");
let form = document.getElementById("convert");

document.addEventListener("keydown", (event) => {
	let key = event.code;
	if (key === "KeyK") {
		convertType = "kilometers";
		heading.innerHTML = "kilometers to Miles Converter";
		intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
		// change the heading.
		// change the intro paragraph
		// change the value of the converType variable
	} else if (key === "KeyM") {
		convertType = "Miles";
		heading.innerHTML = "Miles to Kilometers Converter";
		intro.innerHTML = "Type in a number of Miles and click the button to convert the distance to kilometers.";
	}
});

form.addEventListener("submit", (event) => {
	event.preventDefault();
	var distance = parseFloat(document.getElementById("distance").value);
	if (distance) {
		if (convertType == "Miles") {
			let converted = (distance * 1.609344).toFixed(4);
			answer.innerHTML = ` ${distance} Miles converts to ${converted} kilometers`;
		} else {
			let converted = (distance * 0.621371192).toFixed(4);
			answer.innerHTML = ` ${distance} Miles converts to ${converted} kilometers`;
		}
	} else {
		answer.innerHTML = "<h2>Please provide a valid number</h2>";
	}
});
