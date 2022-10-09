function getNthWord(str: string, wordIndex: number = 0): string | undefined {
    return str.split(/(\s)|(-)/).at(wordIndex)
}

export default getNthWord
