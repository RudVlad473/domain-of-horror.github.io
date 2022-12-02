import Head from "next/head"
import Image from "next/image"
import styles from "./../styles/Layout.module.css"

export interface IArticle {
    userId: number
    id: number
    title: string
    body: string
}

export default function Home({ articles }: { articles: IArticle[] }) {
    return (
        <div>
            <Head>
                <title>My NextJS project</title>
                <meta name="keywords" content="web development, programming" />
            </Head>
            {articles.map((article) => (
                <h3 key={article.id}>{article.title}</h3>
            ))}
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=6`
    )
    const articles = await res.json()

    return {
        props: {
            articles,
        },
    }
}
