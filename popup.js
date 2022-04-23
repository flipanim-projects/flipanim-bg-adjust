let color
var $ = function(id) {
    return document.querySelector(id)
}
onload = () => {
    chrome.storage.sync.get(["mainColor", "bodyColor"], ({ mainColor, bodyColor }) => {
        $('#bodyBg').value = bodyColor,
            $('#mainBg').value = mainColor;
        color = { main: mainColor, body: bodyColor }
    });
}

// When the user changes the background color:
$('#set').onclick = async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); // get current tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id }, 
        function: setBackground, // update the site with the new colors
    });
    var main = $('#mainBg').value,
        body = $('#bodyBg').value
    chrome.storage.sync.set({ mainColor: main, bodyColor: body })
}

function setBackground() {
    chrome.storage.sync.get(["mainColor", "bodyColor"], ({ mainColor, bodyColor }) => {
        document.querySelector('.main').style.backgroundColor = mainColor;
        document.body.style.backgroundColor = bodyColor
        let browseIcons = document.querySelectorAll('.browse_item a>div>div')
        for (let i = 0; i < browseIcons.length; i++) {
            browseIcons[i].style.backgroundColor = mainColor
        }
    });
}
