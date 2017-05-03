console.log("create.js");

var Chatty = (function (originalChatty) {
	var newMessages = [];
	originalChatty.createMessage = function() {
		if (inputArea.value != ""){
			newMessages.push(inputArea.value);
			const par = document.createElement('p')
			const span = document.createElement('span');
		    span.textContent = inputArea.value + " " + timeStamp;
			par.appendChild(span);
			const btn = document.createElement('button');
			btn.textContent = 'Remove';
			const editButton = document.createElement('button');
			editButton.textContent = 'edit';
			par.appendChild(editButton);
			par.appendChild(btn);
			msgBoard.appendChild(par);
			inputArea.value = '';
			return par;
		}
	}

	originalChatty.removeFromArray = function(msgText){
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
