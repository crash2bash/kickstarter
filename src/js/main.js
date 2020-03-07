'use strict';

const shippingPage = document.querySelector(".cart");
const showShippingPage = document.querySelector(".cart--buy");
const buyButton = document.querySelector(".button--question");
const deleteProductButton = document.querySelector(".product-card__close--gold");
const goldSpeakerCard = document.querySelector(".product-card--gold");
const addProductItem = document.querySelector(".cart__price-up");
const valueOfProduct = document.querySelectorAll(".cart__value");
const removeProductItem = document.querySelector(".cart__price-down");
const showMobileMenu = document.querySelector(".header__sandwich");
const header = document.querySelector(".header");
const navigationList = document.querySelector(".header-list");
let inputValue = 1;

buyButton.addEventListener("click", function() {
  shippingPage.classList.add("cart--buy");
});

deleteProductButton.addEventListener("click", function() {
  goldSpeakerCard.classList.add("hide");
});

addProductItem.addEventListener("click", function() {
  inputValue += 1;
  for (let i in valueOfProduct) {
    if ((valueOfProduct[i].value < 10) && (valueOfProduct[i].value > 0)) {
      valueOfProduct[i].value = inputValue;
    }
  }
});

removeProductItem.addEventListener("click", function() {
  inputValue -= 1;
  for (let i in valueOfProduct) {
    if (valueOfProduct[i].value > 1) {
      valueOfProduct[i].value = inputValue;
    }
  }
});

showMobileMenu.addEventListener("click", function() {
  header.classList.add("header--animation");
  navigationList.classList.add("navigation-list--animation");
});
