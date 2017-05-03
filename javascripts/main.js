console.log("main.js");

//vars

var navClear = document.getElementById("navClear");
var msgBoard = document.getElementById("messageBoard");
var inputArea = document.getElementById("inputArea");
var newLine = document.getElementById("inputArea").value;
var dark = document.getElementById("dark");
var large = document.getElementById("large");

//event listeners-- not complete
window.addEventListener("load", function(event) {
	Chatty.loadJSON(event);
});

inputArea.addEventListener("keypress", function(event){
	//add input text to message board
	if(event.keyCode === 13){
		Chatty.createMessage();
	console.log("god damn keypress works");
	}
});

navClear.addEventListener("click", function(event){
	//clear from div, array and DOM
	msgBoard.innerHTML = '';
	Chatty.removeFromArray(event)
	console.log("stupid clear button works", event.target.id);
});


msgBoard.addEventListener('click', (e) => {
		Chatty.deleteFromDom(e.target);
});

dark.addEventListener("click", (e) =>{
	//toggle dark class if checked
	var darkTheme = dark.value
	if(darkTheme == "dark"){
		msgBoard.classList.toggle("dark");
	}
	console.log("shit is dark");
});


large.addEventListener("click", (e) =>{
	//toggle large class if checked
	var lgTheme = large.value;
	if(lgTheme == "large"){
		msgBoard.classList.toggle("large");
	}
	console.log("shit is large.");
});




