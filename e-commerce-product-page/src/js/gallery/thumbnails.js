export default class GalleryThumbnails {
    constructor(DOMthumbnails, gallery) {
        this.gallery = gallery
        this.thumbnails = DOMthumbnails

        this.thumbnails.forEach((item, thumbnailIndex, thumbs) => {
            item.addEventListener("click", () => {
                const prevFeaturedThumbnail = this.gallery.setFeaturedImg(thumbnailIndex)
                thumbs[prevFeaturedThumbnail].classList.remove(
                    "gallery__thumbnails__thumbnail--selected"
                )
                item.classList.add("gallery__thumbnails__thumbnail--selected")
            })
        })
    }
}