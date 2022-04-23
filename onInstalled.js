chrome.runtime.onInstalled.addListener(() => { // when the extension is installed
    chrome.storage.sync.set({ mainColor: '#2ecc71', bodyColor: '#2980b9' }); // set the initial colors
});
