// Add fuction for burger open
let burgerIcon = document.querySelector(".nav__burger");
let mobileBlock = document.querySelector("#mobile__menu");

burgerIcon.addEventListener("click" , () => {
    mobileBlock.classList.toggle("active_mobile");
});