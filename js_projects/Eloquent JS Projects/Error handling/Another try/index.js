class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.3) {
        return a * b
    } else {
        throw new MultiplicatorUnitFailure("Multiplication failed")
    }
}

function multiply(a, b) {
    if(i === undefined) {
        var i = 1
    } else {
        i+=1
    }
    try {
        let result = primitiveMultiply(5, 6)
        
        return result
    } catch (e) {
        if(e instanceof MultiplicatorUnitFailure) {
            console.log(`Try #${i} failed. Re-running multiplication.`)
            i++
            return multiply(a, b)
        }
    }
}
// function multiply(a, b) {
//     let i = 1
//     for (;;) {
//         try {
//             return primitiveMultiply(a, b)
//         } catch (e) {
//             console.log(`Try #${i} failed.`)
//             i++
//             if (!(e instanceof MultiplicatorUnitFailure)) throw e
//         }
//     }
// }

console.log(multiply(5, 6))
