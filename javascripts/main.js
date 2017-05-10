console.log("main.js");

//vars


var timeStamp = new Date();

console.log("timeStamp", timeStamp);

//event listeners
window.addEventListener("load", function(event) {
	Chatty.loadJSON(event);
});

//add input text to message board
$("#inputArea")[0].addEventListener("keypress", function(event){
	if(event.keyCode === 13){
		Chatty.createMessage();
	}
});

//clear from div, array and DOM
$("#navClear")[0].addEventListener("click", function(event){
	$("#messageBoard")[0].innerHTML = '';
	Chatty.removeFromArray(event.target)
});

//delete individual messages
$("#messageBoard")[0].addEventListener('click', (e) => {
	Chatty.deleteFromDom(e.target);
});

//toggle dark theme
$("#dark")[0].addEventListener("click", (e) =>{
	var darkTheme = dark.value
	if(darkTheme == "dark"){
		$("#main-content")[0].classList.toggle("dark");
	}
});

//toggle large theme
$("#large")[0].addEventListener("click", (e) =>{
	var lgTheme = large.value;
	if(lgTheme == "large"){
		$("#messageBoard")[0].classList.toggle("large");
	}
});

//event listener to save button in modal to determine which radio button is selected and toggle classes to page
$("#save-button")[0].addEventListener('click', function() {
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
		$("#main-content")[0].classList.remove("nature")
		$("#main-content")[0].classList.add("fire");
		$("#header")[0].classList.remove("nature-image");
		$("#header")[0].classList.add("fire-image");
	} else if (selected == 1) {
		$("#main-content")[0].classList.add("nature");
		$("#header")[0].classList.add("nature-image");
	} else if (selected == 2) {
		$("#main-content")[0].classList.remove("fire");
		$("#main-content")[0].classList.remove("nature");
		$("#header")[0].classList.remove("fire-image");
		$("#header")[0].classList.remove("nature-image");
	}
});
