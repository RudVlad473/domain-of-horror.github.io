import React, { memo } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

//import MoonSvg from "./UI/MoonSvg/MoonSvg"

const Header = memo(() => {
    return (
        <Container
            fluid
            className="w-100 d-flex justify-content-between align-items-center px-3 px-md-0 py-3 m-0 border-2 border-bottom light-background">
            <Link
                to={"/"}
                className="fw-bold h4 my-0 ms-1 ms-md-5"
                style={{ transition: "all 0.25s ease-in-out" }}>
                Where in the world?
            </Link>
            {/* <span className="d-flex align-items-center gap-2">
                <MoonSvg />

                <span className="h5 me-1 me-md-5 m-0">Dark&nbsp;Mode</span>
            </span> */}
        </Container>
    )
})

Header.displayName = "Header"

export default Header
