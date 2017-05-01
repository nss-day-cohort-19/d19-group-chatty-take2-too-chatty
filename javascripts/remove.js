console.log("remove.js");

var Chatty = (function (originalChatty) {
	originalChatty.deleteFromDom = function (id) {
		id.parentNode.removeChild(id);
	};
	//Chatty.removeFromArray(msgNum);
	return originalChatty
}(Chatty || {}));

