export default function arrayToString(array) {
    return array.reduce(
        (prev, current) => String(prev) + String(current),
        ""
    )
}
