function constructCountryNameUrl(countryCode) {
    return `https://restcountries.com/v2/alpha/${countryCode}?fields=name`
}

export default constructCountryNameUrl
