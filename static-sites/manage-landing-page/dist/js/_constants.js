const carousel = document.getElementById('carousel')
const cards = document.getElementsByClassName('carousel__card')
const cardWidth = parseInt(window.getComputedStyle(cards.item(0)).minWidth)
const cardsCount = cards.length
const overlay = document.getElementById('overlay')

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('to-collapse')[0]
toggleButton.addEventListener('click', () => {
    
    // if (overlay.style.display == 'none' || !overlay.style.display) {
    //     overlay.style.display = 'block'
    //     navbarLinks.style.paddingBlock = '3em'
    //     navbarLinks.style.marginTop = '2em'
    //     navbarLinks.style.marginBottom = '-4em'
    // } else {
    //     overlay.style = ''
    //     navbarLinks.style = ''
    // }
    if (overlay.style.opacity == 0 || !overlay.style.opacity) {
        overlay.style.opacity = '1'
        navbarLinks.style.paddingBlock = '3em'
        navbarLinks.style.marginTop = '2em'
        navbarLinks.style.marginBottom = '-4em'
    } else {
        overlay.style = ''
        navbarLinks.style = ''
    }

    navbarLinks.classList.toggle('active')
})

// const arrows = document.getElementsByClassName('arrow')
// const leftArrow = arrows[0]
// const rightArrow = arrows[1]
