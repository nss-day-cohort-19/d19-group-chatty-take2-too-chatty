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
var natureButton = document.getElementById("nature");
var saveButton = document.getElementById("save-button");
var header = document.getElementById("header");

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
saveButton.addEventListener('click', function() {
	console.log("save button clicked");
	var selected;
	var radios = document.getElementsByName("theme");
	for(var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			selected = radios[i].value;
			break;
		}
	}
	if (selected == 0) {
		mainContent.classList.remove("nature")
		mainContent.classList.add("fire");
		header.classList.remove("nature-image");
		header.classList.add("fire-image");
	} else if (selected == 1) {
		mainContent.classList.add("nature");
		header.classList.add("nature-image");
	} else if (selected == 2) {
		mainContent.classList.remove("fire");
		mainContent.classList.remove("nature");
		header.classList.remove("fire-image");
		header.classList.remove("nature-image");
	}
});
