let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/shiva.png') {
        myImage.setAttribute ('src', 'images/shiva-2');
    } else {
        myImage.setAttribute ('src', 'images/shiva.png')
    }
}

