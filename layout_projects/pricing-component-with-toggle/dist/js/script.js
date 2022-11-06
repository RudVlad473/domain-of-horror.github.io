function swapPrices() {
    const checkbox = document.getElementById('checkbox');

    let prices = [
            document.getElementById('first-price'),
            document.getElementById('second-price'),
            document.getElementById('third-price'),
        ];
    // const firstPrice = document.getElementById('first-price');
    // const secondPrice = document.getElementById('second-price');
    // const thirdPrice = document.getElementById('third-price');
    const annualSubscriptionDiscount = checkbox.checked ? -10.0 : 10.0;
    prices.forEach(price => {
        price.innerHTML = Math.round(price.innerHTML) + annualSubscriptionDiscount - 0.01;
    });
}