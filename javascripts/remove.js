console.log("remove.js");

var Chatty = (function (originalChatty) {
	originalChatty.deleteFromDom = function (id) {
		if (id.textContent === "Remove"){
			var toArray = id.parentNode.parentNode.removeChild(id.parentNode);
			id.parentNode.removeChild(id);
			Chatty.removeFromArray(toArray);
		} else if (id.textContent === "edit") {
			console.log('You clikced on edit!');
			const parent = id.parentNode;
			const span = parent.firstElementChild;
     		const input = document.createElement('input');
     		input.type = 'text';
  			input.value = span.textContent;
  			var parentP = id.parentNode;
  			console.log('HHEHHEHEH:', id.parentNode);
  			parentP.insertBefore(input, span);
     		parentP.removeChild(span);
     		id.textContent = 'save';
		} else if (id.textContent === 'save') {
			const input = id.previousSibling;;
			console.log(input);
		    const span = document.createElement('span');
		    span.textContent = input.value;
		    const parentA = id.parentNode;
		    console.log("3424242",parentA);
		    parentA.insertBefore(span, input);
		    parentA.removeChild(input);
		    id.textContent = 'edit';
			}
	}

	return originalChatty
}(Chatty || {}));

