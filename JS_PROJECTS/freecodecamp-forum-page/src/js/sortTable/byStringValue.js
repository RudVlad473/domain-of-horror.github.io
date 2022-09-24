import arrayToString from "../classes/arrayToString"
export default function sortTableByStringValue(DOMtableBody, columnIndex) {
    const rows = Array.from(DOMtableBody.rows)

    const isAscending = getCellValue(rows.at(0), columnIndex).localeCompare(
        getCellValue(rows.at(-1), columnIndex)
    )

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

    DOMtableBody.innerHTML = arrayToString(rows.map((row) => row.outerHTML))

    function getCellValue(row, index) {
        return String(row.cells[index].innerText)
    }
}
