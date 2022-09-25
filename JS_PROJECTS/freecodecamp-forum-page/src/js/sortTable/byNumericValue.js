import arrayToString from "../classes/arrayToString"
import renderHtmlBarsToTable from "../classes/bar/renderBars"
import setDefaultImg from "../request/defaultImgEventListeners"

export default function sortTableByNumericValue(DOMtableBody, columnIndex) {
    const rows = Array.from(DOMtableBody.rows)

    const isAscending =
        getCellValue(rows.at(0), columnIndex) >
        getCellValue(rows.at(-1), columnIndex)

    if (isAscending) {
        rows.sort(
            (row1, row2) =>
                parseInt(row1.cells[columnIndex].innerText) -
                parseInt(row2.cells[columnIndex].innerText)
        )
    } else {
        rows.sort(
            (row1, row2) =>
                parseInt(row2.cells[columnIndex].innerText) -
                parseInt(row1.cells[columnIndex].innerText)
        )
    }

    renderHtmlBarsToTable(arrayToString(rows.map((row) => row.outerHTML)))
    setDefaultImg()

    function getCellValue(row, index) {
        return parseInt(row.cells[index].innerText)
    }
}
