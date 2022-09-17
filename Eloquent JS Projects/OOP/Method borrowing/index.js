// // const hasOwnProperty = Symbol("hasOwnProperty")
// // let obj = {
// //     [hasOwnProperty]() {
// //         return "Yes, I heard about object-oriented programming in JavaScript. I guess who's the guy who oriented it."
// //     },
// // }

// const hasOwnProperty = Symbol("hasOwnProperty")

// let map = {
//     one: true,
//     two: true,
//     [hasOwnProperty]: true,
// }

// // Fix this call
// console.log(map.hasOwnProperty("one"))
// // → true

// const arr = ["Alfred", "John", "Billy", "other", "stuff", "here"]

// function addAndMultiply(a, b) {
//     return [a + b, a * b]
// }

// const [sum, multiply, division] = addAndMultiply(5, 6)
// console.log(sum, multiply, division)

const person = {
    name: "Jack",
    surname: "Off",
    age: 30,
    address: {
        street: "Pushkin",
        index: "1488",
    },
}

const {
    name,
    surname: secondName,
    age,
    address: { street },
} = person

printAddress(person.address)

function printAddress({street, index}) {
    console.log(`Street ${street} of index ${index}`)
}
