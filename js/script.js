// Add fuction for burger open
let burgerIcon = document.querySelector(".nav__burger");
let mobileBlock = document.querySelector("#mobile__menu");
let burgerElements = document.querySelectorAll(".nav__burger__item");

function openBueger () {
    burgerElements[0].classList.toggle("rotateFirst");
    burgerElements[1].classList.toggle("averrage");
    burgerElements[2].classList.toggle("rotateLast");
    mobileBlock.classList.toggle("active_mobile");
}

burgerIcon.addEventListener("click" , openBueger);