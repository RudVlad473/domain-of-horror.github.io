export default function setDefaultImg() {
    document
        .querySelectorAll(".avatar__img")
        .forEach((img) =>
            img.addEventListener("error", (e) =>
                e.target.setAttribute(
                    "src",
                    require("../../images/no-avatar.png")
                )
            )
        )
}
