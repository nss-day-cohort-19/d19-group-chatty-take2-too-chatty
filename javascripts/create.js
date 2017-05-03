console.log("create.js");

var Chatty = (function (originalChatty) {
	var newMessages = [];
	originalChatty.createMessage = function() {
		if (inputArea.value != ""){
			newMessages.push(inputArea.value);
			const par = document.createElement('p')
			par.textContent = inputArea.value;
			const btn = document.createElement('button');
			btn.textContent = 'Remove';
			par.appendChild(btn);
			msgBoard.appendChild(par);
			inputArea.value = '';
			return par;
		}
		else{
		}
	}

	originalChatty.removeFromArray = function(msgText){
		console.log(msgText);
		for (var i = 0; i < newMessages.length; i++){
			if (newMessages[i] === msgText.textContent){
				newMessages.splice(i, 1);
				break;
			}
			else if (msgText.innerHTML === "Clear Message Board"){
				newMessages = [];
				break;
			}
		}
	}

	return originalChatty

}(Chatty || {}));
