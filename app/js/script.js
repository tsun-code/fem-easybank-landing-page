const btnHamburger = document.querySelector("#btnHamburger");
const styleOpen = "open";
const styleFadeIn = "fade-in";
const styleFadeOut = "fade-out";
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function() {
    //console.log("open-hamburger");
    if (header.classList.contains(styleOpen)) {
        header.classList.remove(styleOpen);
        overlay.classList.remove(styleFadeIn);
        overlay.classList.add(styleFadeOut);
        
    } else {
        header.classList.add(styleOpen);
        overlay.classList.remove(styleFadeOut);
        overlay.classList.add(styleFadeIn);
    }
});
