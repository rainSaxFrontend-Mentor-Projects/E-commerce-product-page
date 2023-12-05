const slideshowBgs = [
    "url('./images/image-product-1.jpg')",
    "url('./images/image-product-2.jpg')",
    "url('./images/image-product-3.jpg')"
]
var slideshowIdx = 0;

setSlideshowBg(slideshowIdx)

document.querySelector(".hamburger-icon").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.add("visible");
})

document.querySelector(".hamburger-close").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.remove("visible");
})

document.querySelector(".next-image").addEventListener("click", slideshowNext)
document.querySelector(".back-image").addEventListener("click", slideshowPrev)

function slideshowNext() {
    slideshowIdx++;
    if (slideshowIdx > slideshowBgs.length) {
        slideshowIdx = 0;
    }
    setSlideshowBg(slideshowIdx)
}

function slideshowPrev() {
    slideshowIdx--;
    if (slideshowIdx < 0) {
        slideshowIdx = 3;
    }
    setSlideshowBg(slideshowIdx)
}

function setSlideshowBg(index) {
    document.querySelector(".slideshow").style.backgroundImage = slideshowBgs[index];
    document.querySelector(".slideshow").style.backgroundRepeat = "no-repeat";
    document.querySelector(".slideshow").style.backgroundSize = "cover";
}