import React from "react"
import styles from "./../styles/Layout.module.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <h1>Hello</h1>
            <main className={styles.main}>{children}</main>
        </div>
    )
}

export default Layout
