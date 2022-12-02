function constructCountryDetailsUrl(countryNameFirstWord?: string): string {
    return `https://restcountries.com/v2/name/${countryNameFirstWord}?fields=name,capital,region,population,flag,borders,topLevelDomain,nativeName,subregion,currencies,languages`
}

export default constructCountryDetailsUrl
