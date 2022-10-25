import React from "react"


interface ContentBox {
    header?: string
    article?: string
    footer?: string
}

const ContentBox = ({ contentBox, ...props }: { contentBox: ContentBox }) => {
    return (
        <section {...props}>
            <header>{contentBox.header}</header>
            <article>{contentBox.article}</article>
            <footer>{contentBox.footer}</footer>
            {props.children}
        </section>
    )
}

export default ContentBox
