const carousel = document.getElementById('carousel')
const cards = document.getElementsByClassName('carousel__card')
const cardWidth = parseInt(window.getComputedStyle(cards.item(0)).minWidth)
const cardsCount = cards.length

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('to-collapse');

// const arrows = document.getElementsByClassName('arrow')
// const leftArrow = arrows[0]
// const rightArrow = arrows[1]
