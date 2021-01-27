const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

const styleOpen = "open";
const styleFadeIn = "fade-in";
const styleFadeOut = "fade-out";
const noScrollStyle = "no-scroll";

btnHamburger.addEventListener("click", function() {
    //console.log("open-hamburger");
    if (header.classList.contains(styleOpen)) {  // Close hamburger menu
        header.classList.remove(styleOpen);
        body.classList.remove(noScrollStyle);
        fadeElems.forEach(function(element) {
            element.classList.remove(styleFadeIn);
            element.classList.add(styleFadeOut); 
        });
        
    } else {  // Open hamburger menu
        header.classList.add(styleOpen);
        body.classList.add(noScrollStyle);
        fadeElems.forEach(function(element) {
            element.classList.remove(styleFadeOut);
            element.classList.add(styleFadeIn); 
        });
    }
});
