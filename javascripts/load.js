var Chatty = (function(originalChatty) {
    originalChatty.loadJSON = function() {
        $.ajax({
            url: "messages.json"
        }).done(showPickupLines);
        function showPickupLines(e) {
            var preloadData = [];
            for (prop in e) {
                var PickupItems = e[prop];
                preloadData.push(PickupItems.pickup)
                const par = document.createElement('p')
                par.textContent = PickupItems.pickup + " " + timeStamp;
                const btn = document.createElement('button');
                btn.textContent = 'Remove';
                par.appendChild(btn);
                $("#messageBoard")[0].appendChild(par);
            }
        }
    }
    return originalChatty
}(Chatty || {}));



















