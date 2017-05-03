console.log("load.js");

var Chatty = (function(originalChatty) {

  originalChatty.loadJSON = function() {
    var dataRequest = new XMLHttpRequest();
    dataRequest.addEventListener("load", dataRequestLoadComplete);
    dataRequest.addEventListener("error", dataRequestError);

    function dataRequestLoadComplete(event){
      console.log("Pickup line data has LOADED");
      var pickupLines = JSON.parse(event.target.responseText);
      console.log("pickup lines", pickupLines);
      showPickupLines(pickupLines);
    }

    function showPickupLines(e) {
      var preloadData = [];
          for (prop in e){
              var PickupItems = e[prop];
              var timeStamp = document.lastModified;
              preloadData.push(PickupItems.pickup)
              const par = document.createElement('p')
              par.textContent = PickupItems.pickup + " " + timeStamp;
              const btn = document.createElement('button');
              btn.textContent = 'Remove';
              par.appendChild(btn);
              msgBoard.appendChild(par);
            }
    }

    function dataRequestError(event){
      console.log("Pickup line data has error");
    }
    dataRequest.open("GET", "messages.json");
    dataRequest.send();
  }
  return originalChatty
}(Chatty || {}));
