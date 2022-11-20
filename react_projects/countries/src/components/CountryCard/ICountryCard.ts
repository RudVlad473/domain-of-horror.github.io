export default interface ICountryCard {
    name: string
    population: number
    region: string
    capital: string
    flagUrl: string
}

export interface CountryCardProps extends ICountryCard {
    cardObserver: IntersectionObserver
}
