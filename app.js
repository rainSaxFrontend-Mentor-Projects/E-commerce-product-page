const slideshowBgs = [
    "url('./images/image-product-1.jpg')",
    "url('./images/image-product-2.jpg')",
    "url('./images/image-product-3.jpg')",
    "url('./images/image-product-4.jpg')"
]
var slideshowIdx = 0;

setSlideshowBg(slideshowIdx)

document.querySelector(".cart-empty").classList.add("visible")

document.querySelector(".hamburger-icon").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.add("visible");
})

document.querySelector(".hamburger-close").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.remove("visible");
})

document.querySelector(".next-image").addEventListener("click", slideshowNext)
document.querySelector(".back-image").addEventListener("click", slideshowPrev)

document.querySelector(".quantity-button.plus").addEventListener("click", function () {
    document.querySelector(".quantity-curr").textContent++;
})

document.querySelector(".quantity-button.minus").addEventListener("click", function () {
    if (document.querySelector(".quantity-curr").textContent > 0) {
        document.querySelector(".quantity-curr").textContent--;
    }
})

document.querySelector(".add-cart").addEventListener("click", function () {
    let quantity = Number(document.querySelector(".quantity-curr").textContent);
    let cartCount = Number(document.querySelector(".cart-count").textContent);
    if (quantity > 0) {
        document.querySelector(".cart-count").textContent = cartCount + quantity;
        cartCount += quantity;
        document.querySelector(".cart-count").classList.add("visible-grid");

        // set cart values
        let itemPrice = document.querySelector(".cart-price").textContent;
        document.querySelector(".cart-quantity").textContent = cartCount;
        document.querySelector(".cart-total-price").textContent = '$' + cartCount * itemPrice.substring(1, itemPrice.length) + '.00';
        document.querySelector(".cart-filled").classList.add("visible-grid")
        document.querySelector(".cart-empty").classList.remove("visible")
    }
})

document.querySelector(".cart-container").addEventListener("click", function () {
    document.querySelector(".cart").classList.toggle("visible-flex")
})

document.querySelector(".cart-delete").addEventListener("click", function () {
    document.querySelector(".quantity-curr").textContent = 0;
    document.querySelector(".cart-count").textContent = 0;
    document.querySelector(".cart-count").classList.remove("visible-grid");
    document.querySelector(".cart-filled").classList.remove("visible-grid")
    document.querySelector(".cart-empty").classList.add("visible")
})

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
        slideshowIdx = slideshowBgs.length;
    }
    setSlideshowBg(slideshowIdx)
}

function setSlideshowBg(index) {
    document.querySelector(".slideshow").style.backgroundImage = slideshowBgs[index];
    document.querySelector(".slideshow").style.backgroundRepeat = "no-repeat";
    document.querySelector(".slideshow").style.backgroundSize = "cover";
}