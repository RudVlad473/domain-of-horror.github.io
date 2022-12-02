import "./styles/index.scss"
import "./index.html"

import "./js/request/request"
import getAllHtmlBars from "./js/request/getAllHtmlBars"
import getDataAsync, {
    freecodecamp30latestPostsUrl,
} from "./js/request/request"
import sortTableByNumericValue from "./js/sortTable/byNumericValue"
import sortTableByStringValue from "./js/sortTable/byStringValue"
import renderHtmlBarsToTable from "./js/classes/bar/renderBars"

renderHtmlBarsToTable(
    await getAllHtmlBars(getDataAsync(freecodecamp30latestPostsUrl))
)

const DOMTable = document.querySelector("table")
const DOMTableBody = DOMTable.querySelector("tbody")
const DOMHeading = DOMTable.querySelector("thead")

const columnHeaders = Array.from(DOMHeading.rows[0].cells)

// columnHeaders.forEach((col, index) => {
//     col.addEventListener("click")
// })

columnHeaders[0].addEventListener("click", () => {
    sortTableByNumericValue(DOMTableBody, 0)
})
columnHeaders[1].addEventListener("click", () => {
    sortTableByStringValue(DOMTableBody, 1)
})
columnHeaders[2].addEventListener("click", () => {
    sortTableByNumericValue(DOMTableBody, 3)
})
columnHeaders[3].addEventListener("click", () => {
    sortTableByNumericValue(DOMTableBody, 4)
})
columnHeaders[4].addEventListener("click", () => {
    sortTableByNumericValue(DOMTableBody, 5)
})
