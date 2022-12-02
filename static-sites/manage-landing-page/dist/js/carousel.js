let rotateTracker = 0

// function getCurrentTransformValue() {
//     return parseInt(carousel.style.transform.match(/(\d+)/)[0])
// }

function spinLeft() {
    if (rotateTracker === -1) {
        // lightLeftArrow()
        return
    }

    carousel.style.transform = `translateX(${carousel.style.transform || 0 + cardWidth}px)`
    rotateTracker--
}

function spinRight() {
    if (rotateTracker === 1) {
        // lightRightArrow()
        return
    }
    carousel.style.transform = `translateX(${carousel.style.transform || 0 - cardWidth}px)`
    rotateTracker++
}

// function lightLeftArrow() {
//     leftArrow.style.fill = 'red'
//     setTimeout(() => {
//         leftArrow.style.fill = 'black'
//     }, 1000)
// }

// function lightRightArrow() {
//     rightArrow.style.fill = 'red'
//     setTimeout(() => {
//         rightArrow.style.fill = 'black'
//     }, 1000)
// }
