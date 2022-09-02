const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".to-collapse")
const overlay = document.querySelector("#overlay")
const mockups = document.querySelector(".main__intro__image__front")
const mobileNav = overlay.querySelector(".link-list")
const introText = document.querySelector(".main__intro__content")

toggleButton.addEventListener("click", () => {
    if (overlay.style.opacity == 0 || !overlay.style.opacity) {
        overlay.style.setProperty("opacity", "1")
        mockups.style.setProperty("transform", "translateY(-100%)")
        overlay.style.setProperty("height", "100vh")
        mobileNav.style.setProperty("transform", "translateY(0)")
        // introText.style.setProperty("transform", "translateY(-35%)")

        console.log(mockups)
    } else {
        overlay.style = navbarLinks.style = mockups.style = introText.style = ""

        mobileNav.style.setProperty("transform", "translateY(-125%)")
    }

    navbarLinks.classList.toggle("active")
})
