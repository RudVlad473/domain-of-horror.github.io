import Countries from "../pages/Countries/Countries"
import CountryDetails from "../pages/CountryDetails/CountryDetails"

export const routes = [
    { path: "/", component: Countries },
    { path: "/:name", component: CountryDetails },
    { path: "/*", component: Countries },
]

// export const routes = [
//     { path: "/", component: React.lazy(() => import("../pages/Countries/Countries")) },
//     { path: "/:name", component: React.lazy(() => import("../pages/CountryDetails/CountryDetails")) },
//     { path: "/*", component: React.lazy(() => import("../pages/Countries/Countries")) },
// ]
