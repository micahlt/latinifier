chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({url: '#Latin'}, function() {
    console.log("Latinifier for Wiktionary has been installed.");
  });
  var toggle = chrome.contextMenus.create(
  {
    "title": "Enable/Disable Latinifier",
    "id": "toggle"
  });
});

chrome.webNavigation.onCompleted.addListener(function() {
      // alert("Website matches Wiktionary.");
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        if (!tabs[0].url.includes("#Latin")) {
        urlNew = tabs[0].url + "#Latin";
        chrome.tabs.update(tabs[0].id, {url: urlNew});
}
      });
}, {url: [{urlMatches : 'https://en.wiktionary.org/wiki/*'}]});