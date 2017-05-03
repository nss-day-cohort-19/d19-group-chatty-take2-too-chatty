// const inputArea = document.getElementById('inputArea')
// const messageBoard = document.getElementById('messageBoard');
var newMessages = [];
var Chatty = (function (originalChatty) {
	originalChatty.createMessage = function() {
		if (inputArea.value != ""){
			newMessages.push(inputArea.value);
			const par = document.createElement('p')
			var timeStamp = document.lastModified;
			par.textContent = inputArea.value + " " + timeStamp;
			const btn = document.createElement('button');
			btn.textContent = 'Remove';
			par.appendChild(btn);
			console.log(par);
			msgBoard.appendChild(par);
			inputArea.value = '';
			return par;}
		else{}
	}

// document.addEventListener('keypress', (e) => {

// 	}
// });

// messageBoard.addEventListener('click', (e) => {
//   if (e.target.tagName === 'BUTTON') {
//     const button = e.target;
//     const par = button.parentNode;
//     const mesDiv = par.parentNode;
//     if (button.textContent === 'Remove') {
//       mesDiv.removeChild(par);
//     }
//   }
// });

	originalChatty.removeFromArray = function(msgText){
		console.log(msgText);
		for (var i = 0; i < newMessages.length; i++){
			if (newMessages[i] === msgText.textContent){
				newMessages.splice(i, 1);
				console.log("removed")
				break;
			}
			else if (msgText.innerHTML === "Clear Message Board"){
				newMessages = [];
				console.log(msgText);
				break;
			}
		}
	}

	return originalChatty

}(Chatty || {}));
