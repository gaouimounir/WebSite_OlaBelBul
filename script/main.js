const slides = [
    {image: 'img/caroussel/saveur_un.png'},
    {image: 'img/caroussel/saveur_deux.jpg'},
    {image: 'img/caroussel/saveur_trois.webp'},
    {image: 'img/caroussel/saveur_quatre.jpg'}
];

let state;

function onSliderGoToNext() {
    state.index++;
    if(state.index == slides.length) {
        state.index = 0;
    }
    refreshSlider();
}

function onSliderGoToPrevious() {
    state.index--;
    if(state.index < 0) {
        state.index = slides.length - 1;
    }
    refreshSlider();
}

function refreshSlider() {
    const sliderImage = document.querySelector('#slider img');
    sliderImage.src = slides[state.index].image;
}

document.addEventListener('DOMContentLoaded', function() {
  state = {};
  state.index = 0;
  state.timer = null;
    installEventHandler('#sliderPrevious', 'click', onSliderGoToPrevious);
    installEventHandler('#sliderNext', 'click', onSliderGoToNext);
    
    refreshSlider();
});

'use strict';

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function installEventHandler(selector, type, eventHandler) {
    const domObject = document.querySelector(selector);
    domObject.addEventListener(type, eventHandler);
}

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

fetch('script/kombucha.json')
    .then(response => response.json())
    .then(data => console.log(data))