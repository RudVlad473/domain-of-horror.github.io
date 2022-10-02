export default function joinNumber(number: string): number {
    //81,770,900 ==> 81770900
    //206,135,893 ==> 206135893

    return +number.replaceAll(/[,.]/g, "")
}
