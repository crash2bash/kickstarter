'use strict';

const shippingPage = document.querySelector(".cart");
const showShippingPage = document.querySelector(".cart--buy");
const buyButton = document.querySelector(".button--question");
const deleteProductButton = document.querySelector(".product-card__close--gold");
const goldSpeakerCard = document.querySelector(".product-card--gold");
const addProductItem = document.querySelector(".cart__price-up");
const valueOfProduct = document.querySelectorAll(".cart__value");
const removeProductItem = document.querySelector(".cart__price-down");
const sandwich = document.querySelector(".header__sandwich");
const navigationList = document.querySelector(".header-list");
const closeButton = document.querySelector(".header__close");
const upButton = document.querySelector(".button--up");
const inputs = document.querySelectorAll(".shipping__input");
const placeholders = document.querySelectorAll(".shipping__placeholder");

let inputValue = 1;

sandwich.addEventListener("click", function() {
  navigationList.classList.remove("menu-close");
  navigationList.classList.add("show-in");
  sandwich.classList.add("disappear");
  closeButton.classList.add("show-in");
});

closeButton.addEventListener("click", function() {
  navigationList.classList.add("menu-close");
  navigationList.classList.remove("show-in");
  sandwich.classList.remove("disappear");
  closeButton.classList.remove("show-in");
});

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

window.onscroll = function() {
  if (window.pageYOffset > 1200) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
};

upButton.addEventListener("click", function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
});

// for (let input=0; input < inputs.length; input++) {
//   inputs[input].addEventListener("focus", function() {
//     placeholders[input].classList.add("fake-placeholder");
//   }
// )};

inputs.forEach((input, index) => {
  input.addEventListener("focus", function() {
    placeholders[index].classList.add("fake-placeholder");
  });
});

inputs.forEach((input, index) => {
  input.addEventListener("focusout", function() {
    placeholders[index].classList.remove("fake-placeholder");
  });
});
