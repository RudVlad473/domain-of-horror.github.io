export default class GalleryThumbnails {
    constructor(DOMthumbnails, gallery) {
        this.gallery = gallery
        this.thumbnails = DOMthumbnails

        this.thumbnails.forEach((item, thumbnailIndex) => {
            item.addEventListener("click", () => {
                const prevFeaturedThumbnailIndex =
                    this.gallery?.setFeaturedImg(thumbnailIndex)
                this.makeSelected(thumbnailIndex, prevFeaturedThumbnailIndex)
            })
        })
    }

    makeSelected(index, prevFeaturedThumbnailIndex) {
        this.thumbnails[prevFeaturedThumbnailIndex].classList.remove(
            "gallery__thumbnails__thumbnail--selected"
        )
        this.thumbnails[index].classList.add(
            "gallery__thumbnails__thumbnail--selected"
        )
    }
}
