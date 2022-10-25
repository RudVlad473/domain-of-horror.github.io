import Countries from "../pages/Countries/Countries"
import CountryDetails from "../pages/CountryDetails/CountryDetails"
//import HeroPage from "../pages/HeroPage"

// export const routes = [
//     { path: "/", component: HeroPage },
//     { path: "/countries", component: Countries },
//     { path: "/countries/:name", component: CountryDetails },
//     { path: "/countries/*", component: Countries },
// ]

export const routes = [
    { path: "/", component: Countries },
    { path: "/:name", component: CountryDetails },
    { path: "/*", component: Countries },
]
