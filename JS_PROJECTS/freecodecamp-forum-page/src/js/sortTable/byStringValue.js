import arrayToString from "../classes/arrayToString"
import renderHtmlBarsToTable from "../classes/bar/renderBars"
import setDefaultImg from "../request/defaultImgEventListeners"
export default function sortTableByStringValue(DOMtableBody, columnIndex) {
    const rows = Array.from(DOMtableBody.rows)

    const isAscending =
        getCellValue(rows.at(0), columnIndex).localeCompare(
            getCellValue(rows.at(-1), columnIndex)
        ) > 0

    if (isAscending) {
        rows.sort((row1, row2) =>
            String(row1.cells[columnIndex].innerText).localeCompare(
                String(row2.cells[columnIndex].innerText)
            )
        )
    } else {
        rows.sort((row1, row2) =>
            String(row2.cells[columnIndex].innerText).localeCompare(
                String(row1.cells[columnIndex].innerText)
            )
        )
    }

    renderHtmlBarsToTable(arrayToString(rows.map((row) => row.outerHTML)))
    setDefaultImg()

    function getCellValue(row, index) {
        return String(row.cells[index].innerText)
    }
}
