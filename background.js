chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ mainColor: '#2ecc71', bodyColor: '#2980b9' });
});