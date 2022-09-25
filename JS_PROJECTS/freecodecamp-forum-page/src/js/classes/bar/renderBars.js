import setDefaultImg from "../../request/defaultImgEventListeners"
import arrayToString from "../arrayToString"
import { observeBars, observer } from "./barObserver"

export default function renderHtmlBarsToTable(htmlBars) {
    const tbody = document.querySelector("tbody")
    // tbody.insertAdjacentHTML("beforeend", arrayToString(htmlBars))
    tbody.innerHTML = arrayToString(htmlBars)

    setDefaultImg()
    observeBars(observer)
}
