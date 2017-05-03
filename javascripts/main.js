console.log("main.js");

//vars

var navClear = document.getElementById("navClear");
var msgBoard = document.getElementById("messageBoard");
var inputArea = document.getElementById("inputArea");
var newLine = document.getElementById("inputArea").value;
var dark = document.getElementById("dark");
var large = document.getElementById("large");
var mainContent = document.getElementById("main-content");
var timeStamp = document.lastModified;
var fireButton = document.getElementById("fire");
var natureButton = document.getElementById("nature")

//event listeners
window.addEventListener("load", function(event) {
	Chatty.loadJSON(event);
});

//add input text to message board
inputArea.addEventListener("keypress", function(event){
	if(event.keyCode === 13){
		Chatty.createMessage();
	}
});

//clear from div, array and DOM
navClear.addEventListener("click", function(event){
	msgBoard.innerHTML = '';
	Chatty.removeFromArray(event.target)
});

//delete individual messages
msgBoard.addEventListener('click', (e) => {
	Chatty.deleteFromDom(e.target);
});

//toggle dark theme
dark.addEventListener("click", (e) =>{
	var darkTheme = dark.value
	if(darkTheme == "dark"){
		mainContent.classList.toggle("dark");
	}
});

//toggle large theme
large.addEventListener("click", (e) =>{
	var lgTheme = large.value;
	if(lgTheme == "large"){
		msgBoard.classList.toggle("large");
	}
});

//event listener to save button in modal to determine which radio button is selected and toggle classes to page
