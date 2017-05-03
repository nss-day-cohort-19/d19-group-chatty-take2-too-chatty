console.log("remove.js");

var Chatty = (function (originalChatty) {
	originalChatty.deleteFromDom = function (id) {
		if (id.tagName === "BUTTON"){
			var toArray = id.parentNode.parentNode.removeChild(id.parentNode);
			id.parentNode.removeChild(id);
			Chatty.removeFromArray(toArray);
		}
	}
	
	return originalChatty
}(Chatty || {}));

