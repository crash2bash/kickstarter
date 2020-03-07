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
const navigationList = document.querySelector(".header-list");
const closeButton = document.querySelector(".header__close");
const upButton = document.querySelector(".button--up");
const inputName = document.querySelector(".shipping__input--name");
const inputEmail = document.querySelector(".shipping__input--email");
const inputPhone = document.querySelector(".shipping__input--phone");
const inputCountry = document.querySelector(".shipping__input--country");
const inputCity = document.querySelector(".shipping__input--city");
const inputAddress = document.querySelector(".shipping__input--address");
const placeholderName = document.querySelector(".shipping__placeholder--name");
const placeholderEmail = document.querySelector(".shipping__placeholder--email");
const placeholderPhone = document.querySelector(".shipping__placeholder--phone");
const placeholderCountry = document.querySelector(".shipping__placeholder--country");
const placeholderCity = document.querySelector(".shipping__placeholder--city");
const placeholderAddress = document.querySelector(".shipping__placeholder--address");

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

inputName.addEventListener("focus", function() {
  placeholderName.classList.add("fake-placeholder");
});

inputName.addEventListener("focusout", function() {
  placeholderName.classList.remove("fake-placeholder");
});

inputEmail.addEventListener("focus", function() {
  placeholderEmail.classList.add("fake-placeholder");
});

inputEmail.addEventListener("focusout", function() {
  placeholderEmail.classList.remove("fake-placeholder");
});

inputPhone.addEventListener("focus", function() {
  placeholderPhone.classList.add("fake-placeholder");
  placeholderPhone.classList.add("fake-placeholder");
});

inputPhone.addEventListener("focusout", function() {
  placeholderPhone.classList.remove("fake-placeholder");
  placeholderPhone.classList.remove("fake-placeholder");
});

inputCountry.addEventListener("focus", function() {
  placeholderCountry.classList.add("fake-placeholder");
  placeholderCountry.classList.add("fake-placeholder");
});

inputCountry.addEventListener("focusout", function() {
  placeholderCountry.classList.remove("fake-placeholder");
  placeholderCountry.classList.remove("fake-placeholder");
});

inputCity.addEventListener("focus", function() {
  placeholderCity.classList.add("fake-placeholder");
  placeholderCity.classList.add("fake-placeholder");
});

inputCity.addEventListener("focusout", function() {
  placeholderCity.classList.remove("fake-placeholder");
  placeholderCity.classList.remove("fake-placeholder");
});

inputAddress.addEventListener("focus", function() {
  placeholderAddress.classList.add("fake-placeholder");
  placeholderAddress.classList.add("fake-placeholder");
});

inputAddress.addEventListener("focusout", function() {
  placeholderAddress.classList.remove("fake-placeholder");
  placeholderAddress.classList.remove("fake-placeholder");
});
