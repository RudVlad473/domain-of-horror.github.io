const accordion = document.querySelector('.questions__content')
const accordionBars = accordion.querySelectorAll('.questions__content__bar')
var openedBar = null

const featureTabs = document.querySelectorAll('.features__menu__bar__item')
const menuBody = document.querySelector('.features__content')
const menuImg = menuBody.querySelector('.features__content__image__img')
const menuHeader = menuBody.querySelector('.features__content__body__header')
const menuArticle = menuBody.querySelector('.features__content__body__article')
var currentTab = featureTabs[0]
const tabsContent = {
    'Simple Bookmarking': {
        src: 'img/illustration-features-tab-1.svg',
        header: 'Bookmark in one click',
        article:
            'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    'Speedy Searching': {
        src: 'img/illustration-features-tab-2.svg',
        header: 'Intelligent Search',
        article:
            'Our powerful seach feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks.',
    },
    'Easy Sharing': {
        src: 'img/illustration-features-tab-3.svg',
        header: 'Share your bookmarks',
        article:
            'Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.'
    },
}

const toggleButton = document.querySelector('.toggle-button')
const toggleButtonBurger = toggleButton.querySelector('.toggle-button__burger')
const overlay = document.querySelector('#overlay')
const navLogo = document.querySelector('.logo>g>path')



