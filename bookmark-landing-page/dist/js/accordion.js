accordionBars.forEach((bar) => {
    bar.addEventListener('click', () => {
        if (hideOpenedBar() == bar) return

        openBar(bar)
        openedBar = bar
    })
})

function openBar(bar) {
    const article = bar.querySelector('.questions__content__bar__content')
    const arrow = bar.querySelector('.bi')

    bar.style.setProperty('gap', '1.5rem')
    article.style.setProperty('max-height', '500px')
    // article.style.setProperty('transform', 'scaleY(1)')
    arrow.style.setProperty('fill', '#fa5757')
    arrow.style.setProperty('transform', 'rotate(180deg)')
}

function hideOpenedBar() {
    if (openedBar === null) return

    const article = openedBar.querySelector('.questions__content__bar__content')
    const arrow = openedBar.querySelector('.bi')

    openedBar.style.setProperty('gap', '0rem')
    article.style.setProperty('max-height', '0')
    arrow.style.setProperty('fill', '#5368df')
    arrow.style.setProperty('transform', 'rotate(0deg)')

    const prevOpenedBar = openedBar
    openedBar = null

    return prevOpenedBar
}
