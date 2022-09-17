export default class Gallery {
    constructor(DOMgallery, orderedPicturesUrlsList) {
        this.gallery = DOMgallery
        this.featured = {
            value: this.gallery.querySelector(".gallery__featured"),
            index: 0,
        }
        this.orderedPicturesUrlsList = orderedPicturesUrlsList

        this.leftSwipe = this.featured.value.querySelector(
            ".gallery__featured__sliders__left-slider"
        )
        this.rightSwipe = this.featured.value.querySelector(
            ".gallery__featured__sliders__right-slider"
        )

        this.leftSwipe.addEventListener("click", this.slideLeft)
        this.rightSwipe.addEventListener("click", this.slideRight)
    }

    slideRight = () => {
        const pictureList = this.orderedPicturesUrlsList
        const featuredPic = this.featured
        const newPicIndex = Math.abs(--featuredPic.index % pictureList.length)
        const newFeaturedPic = pictureList[newPicIndex]

        featuredPic.value
            .querySelector(".gallery__featured__img")
            .setAttribute("src", newFeaturedPic)
    }

    slideLeft = () => {
        const pictureList = this.orderedPicturesUrlsList
        const featuredPic = this.featured
        const newPicIndex = Math.abs(++featuredPic.index % pictureList.length)
        const newFeaturedPic = pictureList[newPicIndex]

        featuredPic.value
            .querySelector(".gallery__featured__img")
            .setAttribute("src", newFeaturedPic)
    }

    setFeaturedImg = (pictureListIndex) => {
        if (
            pictureListIndex < 0 ||
            pictureListIndex >= this.orderedPicturesUrlsList.length
        ) {
            throw new Error("Picture with such index does not exist.")
        }

        const pictureList = this.orderedPicturesUrlsList
        const featuredPic = this.featured
        const newFeaturedPic = pictureList[pictureListIndex]
        const prevFeaturedPic = featuredPic.index

        featuredPic.value
            .querySelector(".gallery__featured__img")
            .setAttribute("src", newFeaturedPic)
        featuredPic.index = pictureListIndex

        return prevFeaturedPic
    }

    getFeaturedImgUrl() {
        return this.featured.value
            .querySelector(".gallery__featured__img")
            .getAttribute("src")
    }
}
