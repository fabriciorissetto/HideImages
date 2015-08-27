//Fired when user clicks in the ICON
chrome.browserAction.onClicked.addListener(function (tab) { 

	chrome.tabs.insertCSS(tab.id, { "file": "ninjaStyles.css" });
    chrome.tabs.executeScript(tab.id, { "file": "ninjaScripts.js" });
	
});