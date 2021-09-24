// start heading
let searchForm =document.querySelector(".search-form");
document.getElementById("search-btn").onclick = () => {
    navBar.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.toggle("active");
}
let shoppingCart =document.querySelector(".shopping-cart");
document.getElementById("cart-btn").onclick = () => {
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    shoppingCart.classList.toggle("active");
}
let loginForm =document.querySelector(".login-form");
document.getElementById("login-btn").onclick = () => {
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.toggle("active");
}
let navBar =document.querySelector(".navbar");
document.getElementById("menu-btu").onclick = () => {
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.toggle("active");
}
window.onscroll = () => {
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}
// end heading
// start product 
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay : 7500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
// end product