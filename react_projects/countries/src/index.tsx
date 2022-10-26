import React from "react"
import ReactDOM from "react-dom/client"
import "./App.scss"
import App from "./App"
import { BrowserRouter, HashRouter } from "react-router-dom"

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
