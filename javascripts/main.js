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
	Chatty.loadJSON(event)
})

inputArea.addEventListener("keypress", function(event){
	//add input text to message board
	if(event.keyCode === 13){
		Chatty.createMessage()
	console.log("god damn keypress works");
	}
});

navClear.addEventListener("click", function(event){
	//clear from div, array and DOM
	console.log("stupid clear button works");
});


msgBoard.addEventListener('click', (e) => {
		Chatty.deleteFromDom(e.target)
});

dark.addEventListener("click", function(checked){
	//toggle class if checked
	console.log("shit is dark");
});


large.addEventListener("click", function(){
	//toggle class if checked
	console.log("shit is large now.")
});



//will need to create a delete function that will delete each seperate ms
