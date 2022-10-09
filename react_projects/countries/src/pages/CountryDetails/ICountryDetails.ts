interface ICountryDetails {
    name: string
    topLevelDomain: string[]
    capital: string
    subregion: string
    region: string
    population: number | string
    borders: string[]
    nativeName: string
    currencies: ICurrency[]
    languages: ILanguage[]
    flag: string
}

interface ICurrency {
    code: string
    name: string
    symbol: string
}

interface ILanguage {
    name: string
    nativeName: string
}



export default ICountryDetails
