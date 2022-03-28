window.onscroll = function() { 
    scrollDown();
    scrollUp();
};

let nav = document.querySelector("nav");

function scrollDown() {
    if (window.pageYOffset > nav.scrollHeight) {
        nav.style.background = "#383838";
        nav.style.position = "fixed";
        nav.style.width = "100%";
        nav.style.top = "0";
    }
}

function scrollUp() {
    if (window.pageYOffset < nav.scrollHeight) {
        nav.style.background = "transparent";
        nav.style.display = "flex";
        nav.style.justifyContent = "space-between";
        nav.style.alignItems = "center";
        nav.style.paddingTop = "20px";
    }
}