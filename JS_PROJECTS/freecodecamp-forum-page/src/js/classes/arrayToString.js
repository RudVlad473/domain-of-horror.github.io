export default function arrayToString(array) {
    return Array.from(array).reduce(
        (prev, current) => String(prev) + String(current),
        ""
    )
}
