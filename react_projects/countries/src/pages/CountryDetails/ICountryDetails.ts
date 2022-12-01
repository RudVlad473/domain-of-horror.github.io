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

export interface ICurrency {
    code: string
    name: string
    symbol: string
}

export interface ILanguage {
    name: string
    nativeName: string
}

export type ICountryParams = {
    name: string
}



export default ICountryDetails
