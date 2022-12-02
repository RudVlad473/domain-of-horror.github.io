function isObjectEmpty(obj: Record<string, unknown>): boolean {
    return !Object.values(obj).some((i) => i)
}

export default isObjectEmpty
