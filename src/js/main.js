'use strict';

const rightButton = document.querySelector(".post-scrolling__right");
const leftButton = document.querySelector(".post-scrolling__left");
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
    changeValue.innerHTML = "02";
    postValue += 1;
  } else if (postValue === 2) {
    advantagesSpeaker.classList.add("scroll");
    advantagesMultiroom.classList.remove("scroll");
    changeValue.innerHTML = "03";
    postValue += 1;
  } else if (postValue === 3) {
    advantagesMultiroom.classList.add("scroll");
    advantagesLighting.classList.remove("scroll");
    changeValue.innerHTML = "04";
    postValue += 1;
  } else {
    advantagesLighting.classList.add("scroll");
    advantagesDesign.classList.remove("scroll");
    changeValue.innerHTML = "01";
    postValue = 1;
  }
});

console.log(postValue);
