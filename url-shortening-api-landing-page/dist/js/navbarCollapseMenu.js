toggleButton.addEventListener('click', () => {
    for(let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active')
    }
})