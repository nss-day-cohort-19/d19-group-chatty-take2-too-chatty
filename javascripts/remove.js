console.log("remove.js");

var Chatty = (function (originalChatty) {
	originalChatty.deleteFromDom = function (id) {
		if (id.tagName === "BUTTON"){
			id.parentNode.parentNode.removeChild(id.parentNode);
	}
	};
	//Chatty.removeFromArray(msgNum);
	return originalChatty
}(Chatty || {}));

