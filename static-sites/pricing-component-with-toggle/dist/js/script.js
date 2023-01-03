const yearlySubscriptionDiscountMultiplier = 10.0

const firstPrice = {
  elem: document.getElementById("first-price"),
  initialPrice: 19.99,
}
const secondPrice = {
  elem: document.getElementById("second-price"),
  initialPrice: 24.99,
}
const thirdPrice = {
  elem: document.getElementById("third-price"),
  initialPrice: 39.99,
}

const isMonthlySubscriptionCheckbox = document.getElementById("checkbox")
const priceSwitch = document.getElementById("switch")

priceSwitch.addEventListener("pointerup", () => swapPrices())

function swapPrices() {
  let prices = [firstPrice, secondPrice, thirdPrice]

  prices.forEach((price) => {
    price.elem.innerText =
      Math.round(
        price.elem.innerText == price.initialPrice
          ? price.initialPrice * yearlySubscriptionDiscountMultiplier
          : price.initialPrice
      ) - 0.01
  })
}
