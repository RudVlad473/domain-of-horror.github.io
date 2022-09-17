const isJSnumber = (number) =>
    /^(([.+-]?\d+[.]?)|(\d+[eE][-+]?\d+))$/g.test(number.toString())

console.log(isJSnumber("5"), "5")
console.log(isJSnumber("43"), "43")
console.log(isJSnumber("999"), "999")

console.log(isJSnumber("+17"), "+17")
console.log(isJSnumber("-6"), "-6")

console.log(isJSnumber("3."), "3.")
console.log(isJSnumber(".8543"), ".8543")

console.log(isJSnumber("1E10"), "1E10")
console.log(isJSnumber("5e-3"), "5e-3")
console.log(isJSnumber("10e+6"), "10e+6")

console.log(isJSnumber("849324823432"), "849324823432")
console.log(isJSnumber("."), ".")
console.log(isJSnumber("-3-3-"), "-3-3-")
console.log(isJSnumber("-64-"), "-64-")
