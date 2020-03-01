'use strict';

const rightButton = document.querySelector("#advantages__right-arrow");
const leftButton = document.querySelector("#advantages__left-arrow");
let postValue = parseInt(document.querySelector(".post-scrolling__change").innerHTML.charAt(1));
let changeValue = document.querySelector(".post-scrolling__change");
const advantagesDesign = document.querySelector(".advantages__list-item--design");
const advantagesSpeaker = document.querySelector(".advantages__list-item--speaker");
const advantagesMultiroom = document.querySelector(".advantages__list-item--multiroom");
const advantagesLighting = document.querySelector(".advantages__list-item--lighting");

rightButton.addEventListener("click", function() {
  if (postValue === 1) {
    advantagesDesign.classList.add("scroll");
    advantagesSpeaker.classList.remove("scroll");
    rightButton.classList.add("arrow-right--enable");
    changeValue.innerHTML = "02";
    postValue += 1;
  } else if (postValue === 2) {
    advantagesSpeaker.classList.add("scroll");
    advantagesMultiroom.classList.remove("scroll");
    rightButton.classList.remove("arrow-right--disable");
    rightButton.classList.add("arrow-right--enable");
    changeValue.innerHTML = "03";
    postValue += 1;
  } else if (postValue === 3) {
    advantagesMultiroom.classList.add("scroll");
    advantagesLighting.classList.remove("scroll");
    rightButton.classList.remove("arrow-right--enable");
    rightButton.classList.add("arrow-right--disable");
    changeValue.innerHTML = "04";
    postValue += 1;
  }
});

leftButton.addEventListener("click", function() {
  if (postValue === 4) {
    advantagesLighting.classList.add("scroll");
    advantagesMultiroom.classList.remove("scroll");
    changeValue.innerHTML = "03";
    postValue -= 1;
  } else if (postValue === 3) {
    advantagesMultiroom.classList.add("scroll");
    advantagesSpeaker.classList.remove("scroll");
    changeValue.innerHTML = "02";
    postValue -= 1;
  } else if (postValue === 2) {
    advantagesSpeaker.classList.add("scroll");
    advantagesDesign.classList.remove("scroll");
    changeValue.innerHTML = "01";
    postValue -= 1;
  }
});

console.log(postValue);
