const firstPrice = document.getElementById("first-price")
const secondPrice = document.getElementById("second-price")
const thirdPrice = document.getElementById("third-price")

const priceSwitch = document.getElementById("switch")
priceSwitch.addEventListener("pointerup", (e) => {
    swapPrices()
})



function swapPrices() {
    const annualSubscriptionDiscountCheckBox =
        document.getElementById("checkbox")

    let prices = [firstPrice, secondPrice, thirdPrice]

    const priceChange = annualSubscriptionDiscountCheckBox.checked
        ? 10.0
        : 0.1

    prices.forEach((price) => {
        price.innerText = Math.round(price.innerHTML) * priceChange - 0.01
    })
}
