//import { CountriesContext } from "./index";
import { createContext } from "react"
import ICountryCard from "../components/CountryCard/ICountryCard";

interface ICountriesContext {
     countries: ICountryCard[]
    setCountries: React.Dispatch<React.SetStateAction<ICountryCard[]>>; 
}
export const CountriesContext = createContext<ICountriesContext>({
    countries: [],
    setCountries: () => {}
})
