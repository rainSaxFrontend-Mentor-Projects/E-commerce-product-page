document.querySelector(".hamburger-icon").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.add("visible");
})

document.querySelector(".hamburger-close").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.remove("visible");
})