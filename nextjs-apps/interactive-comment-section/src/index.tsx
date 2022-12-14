import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import App from "./App"
import "./App.scss"
import { store } from "./app/store"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

/*TODO: Redux
1. Переделать запросы к api через redux
2. Сделать dependency injection на запросы к api (repositories)
3. Сделать comments глобальным state (как и реплаи)
*/
