export default function separateNumber(number: number): string {
    //81770900 ==> 81,770,900
    //206135893 ==> 206,135,893

    //44700000 ==> 44,700,000
    //28875 ==> 28,875

    return splitNumberByRanks(number).join(",")

    function splitNumberByRanks(n: number): string[] {
        const numPieces: string[] = []
        for (let i = 10 ** 3; n / i >= 1; n = (n / i) | 0) {
            const numPiece = (n % i).toString()
            numPieces.unshift(numPiece + "0".repeat(3 - numPiece.length))
        }
        numPieces.unshift(n.toString())

        return numPieces
    }
}
