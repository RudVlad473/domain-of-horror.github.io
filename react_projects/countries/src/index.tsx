import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"

import App from "./App"
import "./App.scss"

// const root = document.getElementById("root")
// ReactDOM.render(<App />, root)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
        {/* <BrowserRouter>
            
        </BrowserRouter> */}
    </React.StrictMode>
)
