'use strict';

const shippingPage = document.querySelector(".cart");
const showShippingPage = document.querySelector(".cart--buy");
const buyButton = document.querySelector(".button--question");

buyButton.addEventListener("click", function(e) {
  shippingPage.classList.add("cart--buy");
})
