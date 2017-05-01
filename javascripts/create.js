


// const inputArea = document.getElementById('inputArea')
// const messageBoard = document.getElementById('messageBoard');
const newMessages = [];
function createMessage(argument) {
	newMessages.push(inputArea.value);
	const par = document.createElement('p')
	par.textContent = inputArea.value;
	const btn = document.createElement('button');
	btn.textContent = 'Remove';
	par.appendChild(btn);
	console.log(par);
	return par;
}
document.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
	const par = createMessage();
	messageBoard.appendChild(par);
	inputArea.value = '';
	}
});

messageBoard.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const par = button.parentNode;
    const mesDiv = par.parentNode;
    if (button.textContent === 'Remove') {
      mesDiv.removeChild(par);
    }
  }
});


var Chatty = (function(originalChatty){
	originalChatty.removeFromArray = function(){
	}
	return originalChatty
})(Chatty || {});
