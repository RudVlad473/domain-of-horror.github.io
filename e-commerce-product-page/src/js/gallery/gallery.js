export default class Gallery {
    constructor(DOMgallery, orderedPicturesUrlsList, thumbnails = null) {
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

        this.leftSwipe.addEventListener(
            "click",
            this.slideLeft.bind(this, thumbnails)
        )
        this.rightSwipe.addEventListener(
            "click",
            this.slideRight.bind(this, thumbnails)
        )
    }

    slideRight = (thumbnails) => {
        const pictureList = this.orderedPicturesUrlsList
        const featuredPic = this.featured
        const newPicIndex = Math.abs(--featuredPic.index % pictureList.length)
        const newFeaturedPic = pictureList[newPicIndex]
        const prevFeaturedIndex = this.orderedPicturesUrlsList.indexOf(
            featuredPic.value
                .querySelector(".gallery__featured__img")
                .getAttribute("src")
        )

        featuredPic.value
            .querySelector(".gallery__featured__img")
            .setAttribute("src", newFeaturedPic)

        thumbnails.makeSelected(newPicIndex, prevFeaturedIndex)
    }

    slideLeft = (thumbnails) => {
        const pictureList = this.orderedPicturesUrlsList
        const featuredPic = this.featured
        const newPicIndex = Math.abs(++featuredPic.index % pictureList.length)
        const newFeaturedPic = pictureList[newPicIndex]

        let prevFeaturedIndex = null
        this.orderedPicturesUrlsList.forEach((image, index) => {
            if (
                image.includes(
                    featuredPic.value
                        .querySelector(".gallery__featured__img")
                        .getAttribute("src")
                )
            ) {
                prevFeaturedIndex = index
            }
        })

        featuredPic.value
            .querySelector(".gallery__featured__img")
            .setAttribute("src", newFeaturedPic)

        thumbnails.makeSelected(newPicIndex, prevFeaturedIndex)
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
