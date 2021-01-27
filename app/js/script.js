const btnHamburger = document.querySelector("#btnHamburger");
const openMenuStyle = "open";
const header = document.querySelector(".header");

btnHamburger.addEventListener("click", function() {
    //console.log("open-hamburger");
    if (header.classList.contains(openMenuStyle)) {
        header.classList.remove(openMenuStyle);
    } else {
        header.classList.add(openMenuStyle);
    }
});
