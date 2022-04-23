// fetch the colors stored from chrome's storage
chrome.storage.sync.get(["mainColor", "bodyColor"], ({ mainColor, bodyColor }) => {
    document.querySelector('.main').style.backgroundColor = mainColor;
    document.body.style.backgroundColor = bodyColor
    let browseIcons = document.querySelectorAll('.browse_item a>div>div') // the icons shown on an anim thumbnail
    for (let i = 0; i < browseIcons.length; i++) {
        browseIcons[i].style.backgroundColor = mainColor // set the background of those to the main background color
    }
});
