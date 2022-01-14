//variables
let buttonshare = document.getElementById("button");
let shareoptions = document.getElementById("share");
let currentWidth = window.innerWidth;
let shareimg = document.getElementsByClassName("shareimg")[0];

//function to show share options onclick
buttonshare.onclick = function share () {
    shareoptions.style.visibility = "visible"
}


//function to hide share options when clicling outside of share box
document.onmouseup = function hideshare (e) {
    if (!shareoptions.contains(e.target)) {
        shareoptions.style.visibility = "hidden";
    }
}

//js on mobile
if(currentWidth <= 400){
    buttonshare.onclick = function sharemobile () {
        shareoptions.style.visibility = "visible";
        shareimg.style.fill = "white"
        buttonshare.style.backgroundColor = "rgb(109, 127, 151)"
    }
    document.onmouseup = function hidesharemobile (e) {
        if (!shareoptions.contains(e.target)) {
            shareoptions.style.visibility = "hidden";
            shareimg.style.fill = "rgb(72, 85, 106)"
            buttonshare.style.backgroundColor = "rgb(236, 242, 248)"
        }
    }
}
