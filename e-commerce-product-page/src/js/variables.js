import Counter from "./counter"
import Gallery from "./gallery/gallery"
import GalleryThumbnails from "./gallery/thumbnails"
import Cart from "./cart/cart"
import getDescriptionDetails, {
    addItemToCartWithDetails,
} from "./cart/descDetails"
import "./nav"
import { toggleFullsreenGallery } from "./gallery/fullscreenGallery"

const defaultDOMgallery = document.querySelector(".gallery.default")
const imgsList = Object.freeze([
    require("/src/images/image-product-1.jpg"),
    require("/src/images/image-product-2.jpg"),
    require("/src/images/image-product-3.jpg"),
    require("/src/images/image-product-4.jpg"),
])

const counter = new Counter(document.querySelector(".counter"))

const gallery = new Gallery(defaultDOMgallery, imgsList)
const thumbnails = new GalleryThumbnails(
    defaultDOMgallery.querySelectorAll(".gallery__thumbnails__thumbnail"),
    gallery
)
const featuredGalleryImg = defaultDOMgallery.querySelector(".gallery__featured")

const cart = new Cart(document.querySelector("#cart"))
const addToCartBtn = document.querySelector("#add-to-cart-btn")
addToCartBtn.addEventListener(
    "click",
    addItemToCartWithDetails.bind(null, cart, gallery, counter)
)

const fullscreenDOMGallery = document.querySelector(".gallery--fullscreen")
const fullScreenGalleryThumbnails = new GalleryThumbnails(
    fullscreenDOMGallery.querySelectorAll(".gallery__thumbnails__thumbnail"),
    fullscreenGallery
)
const fullscreenGallery = new Gallery(
    fullscreenDOMGallery,
    imgsList,
    fullScreenGalleryThumbnails
)

const fullscreenGalleryCloseBtn =
    fullscreenDOMGallery.querySelector(".close-btn")
fullscreenGalleryCloseBtn.addEventListener(
    "click",
    toggleFullsreenGallery.bind(
        null,
        fullscreenDOMGallery,
        document.querySelector(".overlay")
    )
)
featuredGalleryImg.addEventListener(
    "click",
    toggleFullsreenGallery.bind(
        null,
        fullscreenDOMGallery,
        document.querySelector(".overlay")
    )
)
