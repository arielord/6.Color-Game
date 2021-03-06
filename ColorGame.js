var colors = generateRandomColors(9);
var numCircles = 9;
var pickedColor = pickColor();
var circles = document.querySelectorAll(".circle");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode")

// Going to try not to use a global variable.
// var streak = 3;
// var streakMultiplier = 3;

init();

function init(){
	//Setting up the mode buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		modeButtons[3].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy") {
			numCircles = 3;
		}
		else if(this.textContent === "Intermediate"){
			numCircles = 6;
		}
		else if(this.textContent === "Hard"){
			numCircles = 9;
		}
		else {
			numCircles = 9
		}
		// else {
		// 	if (streak <= 1){
		// 		streakMultiplier -= 1;
		// 	}
		// 	else{
		// 		streakMultiplier += 1;
		// 	}
		// 	numCircles = streakMultiplier*3;
		// 	//Add dynamic mode
		// 	if (numCircles > circles.length){
		// 		for(var i = 0; i < 3; i++){
		// 			var div = document.createElement("div");
		// 			div.classList.add("circle");
		// 			document.getElementById("container").appendChild(div);
		// 		}
		// 		circles = document.querySelectorAll(".circle");
		// 		clicked();
		// 	}
		// }
		reset();
		})
	}

	circles = document.querySelectorAll(".circle");

	//Setting up circles

	clicked();
	reset();
}

function clicked(){
	for(var i = 0; i < circles.length; i++){
	circles[i].style.backgroundColor = colors[i];
	//add event listener to each square

	circles[i].addEventListener("click", function(){
		//get color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			//streak += 1;
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
		}
		else{
			//streak -= 1;
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
		});
	}
}


function reset() {
	colors = generateRandomColors(numCircles);
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	circles = document.querySelectorAll(".circle");

	for(var i = 0; i < circles.length; i++){
		if(colors[i]) {
			circles[i].style.display = "block";
			circles[i].style.backgroundColor = colors[i];
		}
		else {
			circles[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = color;
	};
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a red
	var r = Math.floor(Math.random() * 256);
	//pick a green
	var g = Math.floor(Math.random() * 256);
	//pick a blue
	var b = Math.floor(Math.random() * 256);
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb;
}

// A function that can dynamically change the difficulty.
// Try not to rely on var strak and see if I can contain it within this one function
function dynamicDifficulty(){

}

// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.getElementById("main").appendChild(div);
