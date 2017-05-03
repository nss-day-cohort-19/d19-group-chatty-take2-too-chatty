


// const inputArea = document.getElementById('inputArea')
// const messageBoard = document.getElementById('messageBoard');
var newMessages = [];
var Chatty = (function (originalChatty) {
	originalChatty.createMessage = function() {
		if (inputArea.value != ""){
			newMessages.push(inputArea.value);
			const par = document.createElement('p')
			par.textContent = inputArea.value;
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
			if (newMessages[i] === msgText){
				newMessages.splice(i, 1);
				break;
			}
			else if (msgText.target.id == "navClear"){
				newMessages = []
				console.log(msgText)
			}
		}
	}

	return originalChatty

}(Chatty || {}));
