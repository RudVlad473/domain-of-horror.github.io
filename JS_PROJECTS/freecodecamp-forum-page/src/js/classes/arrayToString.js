export default function arrayToString(array) {
    return array.reduce(
        (prev, current) => prev.toString() + current.toString(),
        ""
    )
}
