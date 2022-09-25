export const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting)

        // if(entry.isIntersecting) {
        //     observer.unobserve(entry.target)
        // }
    })
}, {
    threshold: 0.5
})

export function observeBars(observer) {
    const DOMBars = document.querySelectorAll(".bar")
    DOMBars.forEach((bar) => {
        observer.observe(bar)
    })
}
