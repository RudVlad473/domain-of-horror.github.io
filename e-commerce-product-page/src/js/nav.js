const sideBar = document.querySelector(".mobile-sidebar")
const overlay = document.querySelector(".overlay")
const humburger = document.querySelector(".humburger")

humburger.addEventListener("click", toggleSidebar.bind(null, sideBar, humburger, overlay))

function toggleSidebar(sidebar, humburger, overlay) {
    sidebar.classList.toggle("active")
    overlay.classList.toggle("toggled")
    if(humburger.getAttribute("src").includes("menu")) {
        humburger.setAttribute("src", require("../images/icon-close.svg"))
    } else {
        humburger.setAttribute("src", require("../images/icon-menu.svg"))
    }
    
}
