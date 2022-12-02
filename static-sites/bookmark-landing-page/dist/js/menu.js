featureTabs.forEach((tab) => {
    tab.addEventListener('click', () => switchTabs(tab))
})

function switchTabs(tab) {
    if (!tab.classList.contains('current-tab')) {
        console.log(currentTab)
        currentTab.classList.remove('current-tab')
        tab.classList.add('current-tab')
    } else return

    const tabContent = tabsContent[tab.innerHTML]

    menuImg.setAttribute('src', tabContent.src)
    menuHeader.innerHTML = tabContent.header
    menuArticle.innerHTML = tabContent.article

    currentTab = tab
}
