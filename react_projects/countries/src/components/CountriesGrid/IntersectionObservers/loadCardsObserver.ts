export const loadCardsObserver = new IntersectionObserver((entries) => {
    //console.warn("LOAD", loadCount)
    const lastElem = entries[0]

    if (lastElem.isIntersecting && loadCount < countries.length) {
        // setLoadCount((loadCount) => loadCount + defaultLoadCount)
        console.log("would load")
    }
})
