import React from "react"
import { Link } from "react-router-dom"
import ContentBox from "./ContentBox"
import styles from "./ContentBox.module.scss"

const HeroPage = () => {
    return (
        <main className={styles["main"]}>
            <section className={styles["section"]}>
                <Link
                    to="/countries"
                    className={styles["main-link"]}>
                    <header className={styles["header"]}>Countries</header>
                </Link>
                <article className={styles["article"]}>
                    A modern web application powered by ReactJS
                </article>
                <footer className={styles["footer"]}>
                    Maintained by Rudenko Volodymyr of KHPI
                </footer>
                <div className="link-btn link-btn--purple">Link to GitHub</div>
            </section>
            <section className={styles["section"]}>
                <div className="link-btn link-btn--pink">About</div>
                <div className="link-btn link-btn--pink">My GitHub</div>
                <div className="link-btn link-btn--pink">Project's GitHub</div>
                <div className="link-btn link-btn--pink">Resources</div>
            </section>
            <section className={styles["section"]}>
                <header>Features</header>
                <article>
                    <div className="token">Asynchronous API Calls</div>
                    <div className="token">Dynamic content loading</div>
                    <div className="token">Sorting</div>
                    <div className="token">Filtering</div>
                    <div className="token">Searching</div>
                    <div className="token">Details for every country</div>
                    <div className="token">Routing</div>
                    <div className="token">Dark Theme</div>
                </article>
            </section>
            <section className={styles["section"]}>
                <header>Technologies used</header>
                <article>
                    <div className="token">React</div>
                    <div className="token">Sass</div>
                    <div className="token">TypeScript</div>
                    <div className="token">React Router</div>
                    <div className="token">Axios</div>
                    <div className="token">Bootstrap</div>
                    <div className="token">Webpack</div>
                    <div className="token">CSS Grid</div>
                    <div className="token">CSS Flexbox</div>
                    <div className="token">Google Fonts</div>
                    <div className="token">Babel</div>
                    <div className="token">Adaptive design</div>
                    <div className="token">Responsive design</div>
                    <div className="token">Git</div>
                    <div className="token">BEM</div>
                </article>
            </section>
        </main>
    )
}

export default HeroPage
