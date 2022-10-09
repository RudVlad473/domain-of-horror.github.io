import React from "react"
import AppRouter from "./components/AppRouter"
import Header from "./components/Header"
const CountryDetails = React.lazy(
    () => import("./pages/CountryDetails/CountryDetails")
)

const App = () => {
    return (
        <>
            <Header />
            <AppRouter />
        </>
    )
}

export default App

// {
//     /* <Header /> */
// }
// {
//     /* <Countries /> */
// }
// {
//     /* <Suspense>
//                 <CountryDetails
//                     details={{
//                         name: "Germany",
//                         topLevelDomain: [".de"],
//                         capital: "Berlin",
//                         subregion: "Central Europe",
//                         region: "Europe",
//                         population: 83240525,
//                         borders: ["NLD", "POL", "CHE"],
//                         nativeName: "Deutschland",
//                         currencies: [
//                             {
//                                 code: "EUR",
//                                 name: "Euro",
//                                 symbol: "€",
//                             },
//                         ],
//                         languages: [
//                             {
//                                 name: "German",
//                                 nativeName: "Deutsch",
//                             },
//                         ],
//                         flag: "https://flagcdn.com/de.svg",
//                     }}
//                 />
//             </Suspense> */
// }
