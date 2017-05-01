var Chatty = (function(originalChatty) {

  originalChatty.loadJSON = function() {
      var dataRequest = new XMLHttpRequest();
      dataRequest.addEventListener("load", dataRequestLoadComplete);
      dataRequest.addEventListener("error", dataRequestError);

      function dataRequestLoadComplete(event){
        console.log("Pickup line data has LOADED");
        var pickupLines = JSON.parse(event.target.responseText);
        console.log("pickup lines", pickupLines);
      }
      function dataRequestError(event){
        console.log("Pickup line data has error");
      }
      dataRequest.open("GET", "messages.json");
      dataRequest.send();
  }
  return originalChatty
}(Chatty || {}));
