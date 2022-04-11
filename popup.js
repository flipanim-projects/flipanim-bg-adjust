let color = {
    main: '',
    body: ''
}
onload = () => {
    chrome.storage.sync.get(["mainColor", "bodyColor"], ({
        mainColor,
        bodyColor
    }) => {
        document.getElementById('bodyBg').value = bodyColor,
            document.getElementById('mainBg').value = mainColor;
        color.main = mainColor
        color.body = bodyColor
    });
}

// When the input, inject setPageBackgroundColor into current page
document.body.addEventListener("input", () => {});

document.getElementById('set').onclick = async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: bga,
    });
    var main = document.getElementById('mainBg').value,
        body = document.getElementById('bodyBg').value
    chrome.storage.sync.set({ mainColor: main, bodyColor: body })
}

function bga() {
    chrome.storage.sync.get(["mainColor", "bodyColor"], ({ mainColor, bodyColor }) => {
        document.querySelector('.main').style.backgroundColor = mainColor;
        document.body.style.backgroundColor = bodyColor
        let browseIcons = document.querySelectorAll('.browse_item a>div>div')
        for (let i = 0; i < browseIcons.length; i++) {
            browseIcons[i].style.backgroundColor = mainColor
        }
    });
}