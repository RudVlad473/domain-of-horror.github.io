import getHash from "../hash"

export default class Cart {
    constructor(DOMcart) {
        this.cart = DOMcart
        this.DOMitems = this.cart.querySelector(".cart__content")
        this.DOMbadge = this.cart.querySelector(".cart__badge")
        this.currentIds = []

        const cartImg = this.cart.querySelector("svg")
        cartImg.addEventListener("click", this.toggleCart.bind(this))

        const closeBtn = this.cart.querySelector(".cart__content__cart__close")
        closeBtn.addEventListener("click", this.toggleCart.bind(this))

        this.cart.addEventListener("dblclick", this.toggleCart.bind(this))

        this.loadItemsFromLocalStorage()
    }

    getAllItems() {
        return this.DOMitems.querySelectorAll(".cart__content__item")
    }

    addItem(
        { thumbnailUrl, title, unitPrice, amount },
        shouldUpdateLocalStorage = true
    ) {
        const currentDOMitems = this.getAllItems()
        const id = getHash(thumbnailUrl + title + unitPrice)

        const newItem = this.constructNewHtmlItem(
            thumbnailUrl,
            title,
            unitPrice,
            amount,
            id
        )

        shouldUpdateLocalStorage
            ? this.addItemToLocalStorage(
                  { thumbnailUrl, title, unitPrice, amount },
                  id
              )
            : undefined

        if (!this.currentIds.indexOf(id)) {
            this.currentIds.push(id)
        }

        const existingItem = this.getExistingItem(id, currentDOMitems)
        if (this.getExistingItem(id, currentDOMitems) !== null) {
            this.updateAmountOfExistingItem(existingItem, amount, unitPrice)
            this.appendBadge(amount)
            return
        }
        //making HTML out of string

        const binIcon = newItem.querySelector(".cart__content__item__delete")
        this.addClickListenerToDOMobject(
            binIcon,
            this.removeItem.bind(this, id)
        )

        if (currentDOMitems.length > 0) {
            currentDOMitems[currentDOMitems.length - 1].after(newItem)
        } else {
            const cartTitle = this.DOMitems.querySelector(
                ".cart__content__cart"
            )
            cartTitle.after(newItem)
        }

        this.appendBadge(amount)
    }

    constructNewHtmlItem(thumbnailUrl, title, unitPrice, amount, id) {
        const rawItem = `
                <div id="${id}" class="cart__content__item">
                    <div class="cart__content__item__thumbnail">
                        <img src="${thumbnailUrl}" alt="thumbnail">
                    </div>
                    <div class="cart__content__item__desc">
                        <div class="cart__content__item__desc__title">
                            ${title}
                        </div>
                        <div class="cart__content__item__desc__price">
                            <span class="cart__content__item__desc__price__amount">
                                ${"$" + unitPrice} x ${amount}
                            </span>
                            <span>&nbsp;&nbsp;</span>
                            <span class="cart__content__item__desc__price__sum">
                                ${"$" + (unitPrice * amount).toFixed(2)}
                            </span>
                        </div>
                    </div>
                    <div class="cart__content__item__delete">
                        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <path
                                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                    id="a" />
                            </defs>
                            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                        </svg>
                    </div>
                </div>
                `
        return document.createRange().createContextualFragment(rawItem)
    }

    removeItem(id) {
        const currentDOMitems = this.getAllItems()

        const itemToDelete = this.getExistingItem(id, currentDOMitems)

        if (itemToDelete !== null) {
            itemToDelete.remove()
            this.removeItemFromLocalStorage(id)

            this.currentIds.splice(this.currentIds.indexOf(id), 1)

            const itemToDeleteAmount = itemToDelete
                .querySelector(".cart__content__item__desc__price__amount")
                .innerHTML.trim()
                .split(" ")
                .at(-1)
            this.decreaseBadge(itemToDeleteAmount)
        } else {
            throw new Error("Item with such id does not exist")
        }
    }

    getExistingItem(id, items) {
        let existingItem = null
        for (let i = 0; i < items.length; i++) {
            if (items[i].getAttribute("id") == id) {
                existingItem = items[i]
                break
            }
        }

        return existingItem
    }

    updateAmountOfExistingItem(existingItem, amount, unitPrice) {
        const unitPriceAndAmount = existingItem.querySelector(
            ".cart__content__item__desc__price__amount"
        )
        const resultSum = existingItem.querySelector(
            ".cart__content__item__desc__price__sum"
        )

        //$125 x 3 ==> 3
        const prevAmount = unitPriceAndAmount.innerText
            .split(" ")
            .filter((i) => i)
            .at(-1)

        unitPriceAndAmount.innerHTML = `$${unitPrice} x ${
            +amount + +prevAmount
        }`
        resultSum.innerHTML = `$${unitPrice * (+amount + +prevAmount)}`
    }

    appendBadge(value = 1) {
        if (+this.DOMbadge.innerHTML >= 9) {
            return
        } else if (+this.DOMbadge.innerHTML + value > 9) {
            this.DOMbadge.innerHTML = "+9"
        } else {
            this.DOMbadge.innerHTML = +this.DOMbadge.innerHTML + value
        }
    }

    addItemToLocalStorage({ thumbnailUrl, title, unitPrice, amount }, id) {
        if (localStorage.getItem(id) == null) {
            localStorage.setItem(
                id,
                JSON.stringify({ thumbnailUrl, title, unitPrice, amount })
            )
        } else {
            const prevItem = JSON.parse(localStorage.getItem(id))
            prevItem.unitPrice = unitPrice
            prevItem.amount += amount
            localStorage.setItem(id, JSON.stringify(prevItem))
        }
    }

    removeItemFromLocalStorage(id) {
        return localStorage.removeItem(id)
    }

    loadItemsFromLocalStorage() {
        const localStorageKeys = Object.keys(localStorage)

        for (let id of localStorageKeys) {
            const lsItem = JSON.parse(localStorage.getItem(id))
            // const itemHash = getHash(
            //     lsItem.thumbnailUrl + lsItem.title + lsItem.unitPrice
            // )
            console.log(this.currentIds.length)

            if (this.currentIds.indexOf(id) === -1) {
                this.addItem(lsItem, false)
            }
        }
    }

    decreaseBadge(value = 1) {
        if (+this.DOMbadge.innerHTML <= 0) {
            return
        } else if (+this.DOMbadge.innerHTML - value <= 0) {
            this.DOMbadge.innerHTML = "0"
        } else {
            this.DOMbadge.innerHTML = +this.DOMbadge.innerHTML - value
        }
    }

    addClickListenerToDOMobject(DOMobject, callback) {
        DOMobject.addEventListener("click", callback)
    }

    toggleCart() {
        this.DOMitems.classList.toggle("reveal")
    }
}

import "./descDetails"
