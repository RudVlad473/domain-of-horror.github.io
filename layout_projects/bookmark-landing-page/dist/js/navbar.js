toggleButton.addEventListener('click', () => {
    if (overlay.style.height == '0px' || !overlay.style.height) {
        overlay.style.height = '100vh'
        navLogo.setAttribute('fill', '#f7f7f7')
    } else {
        overlay.style.height = '0'
        navLogo.setAttribute('fill', '#252b46')
    }
    toggleButtonBurger.classList.toggle('open')
})
