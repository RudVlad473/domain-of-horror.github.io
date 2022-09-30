import axios from "axios"
import ICountryCard from "../CountryCard/ICountryCard"

export const requestUrl =
    "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"

export default async function getCountriesAsync(
    url: string
): Promise<ICountryCard[]> {
    const { data } = await axios.get<ICountryCard[]>(url)

    return data

    // return Array.from(data, (country: any) => {
    //     const currentCountry: ICountryCard = {
    //         name: country.name,
    //         population: country.population,
    //         flag: country.flag,
    //         region: country.region,
    //         capital: country.capital,
    //     }
    //     return currentCountry
    // })
}
