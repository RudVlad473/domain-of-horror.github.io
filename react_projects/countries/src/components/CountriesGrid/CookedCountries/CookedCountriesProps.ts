import ICountryCard from "../../CountryCard/ICountryCard"

export default interface CookedCountriesProps {
    cookedCountries: ICountryCard[]
    cardObserver: IntersectionObserver
}
