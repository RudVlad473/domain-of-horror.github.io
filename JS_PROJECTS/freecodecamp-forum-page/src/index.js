import "./styles/index.scss"
import "./index.html"

import "./js/request/request"
import getAllHtmlBars from "./js/request/getAllHtmlBars"
import getDataAsync, {
    freecodecamp30latestPostsUrl,
} from "./js/request/request"
import arrayToString from "./js/classes/arrayToString"

renderHtmlBarsToTable(
    await getAllHtmlBars(await getDataAsync(freecodecamp30latestPostsUrl))
)

document
    .querySelectorAll(".avatar__img")
    .forEach((img) => img.addEventListener("error", setDefaultImg))

function setDefaultImg(event) {
    console.log(event.target)
    event.target.setAttribute("src", require("./images/no-avatar.png"))
}

function renderHtmlBarsToTable(htmlBars) {
    const tbody = document.querySelector("tbody")
    tbody.insertAdjacentHTML("beforeend", arrayToString(htmlBars))
}
