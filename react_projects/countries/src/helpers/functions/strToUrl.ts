function strToUrl(str: string): string {
    return str.split(/\s/).join("-")
}

export default strToUrl
