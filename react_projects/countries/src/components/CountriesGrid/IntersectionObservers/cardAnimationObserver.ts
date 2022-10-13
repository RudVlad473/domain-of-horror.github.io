import cardStyles from "../../CountryCard/CountryCard.module.scss"

export const cardAnimationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle(
                cardStyles["active"],
                entry.isIntersecting
            )
        })
    },
    {
        threshold: 0.5,
    }
)
