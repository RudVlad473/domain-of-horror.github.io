import React, { ReactComponentElement } from "react"
import { Container } from "react-bootstrap"
import MoonSvg from "./UI/MoonSvg/MoonSvg"

const Header = (props: any) => {
    return (
        <Container
            fluid
            className="w-100 d-flex justify-content-between align-items-center px-3 px-md-0 py-3 m-0 border-2 border-bottom light-background">
            <span className="fw-bold h4 my-0 ms-1 ms-md-5">
                Where in the world?
            </span>
            <span className="d-flex align-items-center gap-2">
                <MoonSvg />
                <span className="h5 me-1 me-md-5 m-0">Dark&nbsp;Mode</span>
            </span>
        </Container>
    )
}

export default Header
