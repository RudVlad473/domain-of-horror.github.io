function isObjectEmpty(obj: Object): boolean {
    return !Object.values(obj).some((i) => i)
}

export default isObjectEmpty
