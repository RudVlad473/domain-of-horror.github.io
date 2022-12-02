export default interface ICountryCard {
    name: string
    population: number
    region: string
    capital: string
    flagUrl: string

    [index: string]: string | number 
}

export interface CountryCardProps extends ICountryCard {
    cardObserver: IntersectionObserver
}
