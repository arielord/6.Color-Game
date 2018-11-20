var colors = generateRandomColors(9);
var numSquares = 9;
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode")

var streak = 3;
var streakMultiplier = 3;

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
			numSquares = 3;
		}
		else if(this.textContent === "Intermediate"){
			numSquares = 6;
		}
		else if(this.textContent === "Hard"){
			numSquares = 9;
		}
		else {
			if (streak <= 1){
				streakMultiplier -= 1;
			}
			else{
				streakMultiplier += 1;
			}
			numSquares = streakMultiplier*3;
			//Add dynamic mode
			if (numSquares > squares.length){
				for(var i = 0; i < 3; i++){
					var div = document.createElement("div");
					div.classList.add("square");
					document.getElementById("container").appendChild(div);
				}
				squares = document.querySelectorAll(".square");
				clicked();
			}
		}
		reset();
		})
	}

	squares = document.querySelectorAll(".square");

	//Setting up squares

	clicked();
	reset();
}

function clicked(){
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	//add event listener to each square

	squares[i].addEventListener("click", function(){
		//get color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			streak += 1;
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
		}
		else{
			streak -= 1;
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
		});
	}
}


function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	squares = document.querySelectorAll(".square");

	for(var i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
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

// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.getElementById("main").appendChild(div);