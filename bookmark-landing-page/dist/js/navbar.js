toggleButton.addEventListener('click', () => {
    // if (overlay.style.opacity == 0 || !overlay.style.opacity) {
    //     overlay.style.opacity = '1'
    // } else {
    //     overlay.style = ''
    // }
    if (overlay.style.height == '0px' || !overlay.style.height) {
        overlay.style.height = '100vh'
    } else {
        overlay.style.height = '0'
    }
    toggleButtonBurger.classList.toggle('open')
})
