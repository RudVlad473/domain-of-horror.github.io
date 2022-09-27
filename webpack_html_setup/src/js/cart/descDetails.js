export default function getDescriptionDetails(gallery, counter) {
    const thumbnailUrl = gallery.getFeaturedImgUrl()
    const descNode = document.querySelector(".description")
    const title = descNode.querySelector(".description__title").innerHTML
    const unitPrice = descNode.querySelector(
        ".description__prices__current-price"
    ).innerHTML.substring(1)
    console.log(unitPrice)
    const amount = counter.getParseIntValue()

    return {
        thumbnailUrl,
        title,
        unitPrice,
        amount,
    }
}

export function addItemToCartWithDetails(cart, gallery, counter) {
    const descDetails = getDescriptionDetails(gallery, counter)
    cart.addItem(descDetails)
}


