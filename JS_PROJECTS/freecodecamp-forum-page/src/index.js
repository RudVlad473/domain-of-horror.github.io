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
import addSortEventListener from "./js/sortTable/addSortEventListener"

renderHtmlBarsToTable(
    await getAllHtmlBars(getDataAsync(freecodecamp30latestPostsUrl))
)

const DOMTable = document.querySelector("table")
const DOMTableBody = DOMTable.querySelector("tbody")
const DOMHeading = DOMTable.querySelector("thead")

const columnHeaders = {
    ...Array.from(DOMHeading.rows[0].cells).map((cell) => {
        return {
            index: cell.outerText,
        }
    }),
}
console.log(columnHeaders)

columnHeaders[0].addEventListener("click", () => {
    console.log(columnHeaders[0].outerText)
    sortTableByNumericValue(DOMTableBody, 0)
    setDefaultImg()
})
columnHeaders[1].addEventListener("click", () => {
    console.log(columnHeaders[1])
    sortTableByStringValue(DOMTableBody, 1)
    setDefaultImg()
})
columnHeaders[2].addEventListener("click", () => {
    sortTableByNumericValue(DOMTableBody, 3)
    setDefaultImg()
})
columnHeaders[3].addEventListener("click", () => {
    sortTableByNumericValue(DOMTableBody, 4)
    setDefaultImg()
})
columnHeaders[4].addEventListener("click", () => {
    sortTableByNumericValue(DOMTableBody, 5)
    setDefaultImg()
})
