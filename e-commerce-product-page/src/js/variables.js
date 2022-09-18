import Counter from "./counter"
import Gallery from "./gallery/gallery"
import GalleryThumbnails from "./gallery/thumbnails"
import Cart from "./cart/cart"
import getDescriptionDetails, {
    addItemToCartWithDetails,
} from "./cart/descDetails"
import "./nav"

const domGallery = document.querySelector(".gallery")
const imgsList = Object.freeze([
    require("/src/images/image-product-1.jpg"),
    require("/src/images/image-product-2.jpg"),
    require("/src/images/image-product-3.jpg"),
    require("/src/images/image-product-4.jpg"),
])

const counter = new Counter(document.querySelector(".counter"))
const gallery = new Gallery(domGallery, imgsList)
const thumbnails = new GalleryThumbnails(
    domGallery.querySelectorAll(".gallery__thumbnails__thumbnail"),
    gallery
)
const cart = new Cart(document.querySelector("#cart"))
const addToCartBtn = document.querySelector("#add-to-cart-btn")
addToCartBtn.addEventListener(
    "click",
    addItemToCartWithDetails.bind(null, cart, gallery, counter)
)

