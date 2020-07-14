var numsquares = 6
var colors = generaterandomcolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebtn = document.querySelectorAll(".mode");

init();

function init(){
	setupmodebtn();
	setupsquares();
	reset();
}

function setupmodebtn(){
	for (var i =0; i<modebtn.length; i++){
		modebtn[i].addEventListener("click", function(){
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsquares = 3: numsquares=6;
			reset()
		});
	}
}

function setupsquares(){
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedcolor = this.style.backgroundColor;
			if(clickedcolor===pickedcolor){
				messagedisplay.textContent = "Correct!"
				resetbutton.textContent = "Play Again?"
				h1.style.backgroundColor = clickedcolor
				changecolors(clickedcolor)
			}else{
				this.style.backgroundColor="#232323";
				messagedisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor
	messagedisplay.textContent=""
	resetbutton.textContent="New colors"
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"
}


resetbutton.addEventListener("click", function(){
	reset()
})


function changecolors(color){
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	var arr =[];

	for (var i =0; i<num; i++){
		arr.push(randomcolor())
	}
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)
	return "rgb(" + r + ", " + g +", " + b+")";
}