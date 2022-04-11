chrome.storage.sync.get(["mainColor", "bodyColor"], ({ mainColor, bodyColor }) => {
    document.querySelector('.main').style.backgroundColor = mainColor;
    document.body.style.backgroundColor = bodyColor
    let browseIcons = document.querySelectorAll('.browse_item a>div>div')
    for (let i = 0; i < browseIcons.length; i++) {
        browseIcons[i].style.backgroundColor = mainColor
    }
});


/* for later

function computeTextColor(bgColor) {
    var color = (bgColor.value.charAt(0) === '#') ? bgColor.value.substring(1, 7) : bgColor.value;
    var r = parseInt(color.substring(0, 2), 16), // hexToR
        g = parseInt(color.substring(2, 4), 16), // hexToG
        b = parseInt(color.substring(4, 6), 16); // hexToB
    let final = (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
        'black' : 'white';
    return final
} 

*/