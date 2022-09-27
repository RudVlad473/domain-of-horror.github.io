import React, { useRef, useState } from "react"
import ClassCounter from "./components/ClassCounter"
import Counter from "./components/Counter"
import Post from "./components/Post"
import PostList from "./components/PostList"
import Button from "./components/UI/button/Button"
import Input from "./components/UI/input/Input"
import "./styles/App.css"

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "C#",
            body: "Second best language in the world",
        },
        {
            id: 2,
            title: "Python",
            body: "Third best language in the world",
        },
        {
            id: 3,
            title: "Java",
            body: "Fourth best language in the world",
        },
        {
            id: 4,
            title: "Ruby",
            body: "Fifth best language in the world",
        },
    ])
    const [post, setPost] = useState({ title: "", body: "" })
    // const bodyInputRef = useRef()

    function addNewPost(e) {
        setPosts([...posts, { ...post, id: Date.now() }])
        setPost({ title: "", body: "" })

        e.preventDefault()
    }

    return (
        <div className="App">
            <form action="post">
                {/* Управляемый компонент (двухстороннее связывание) */}
                <Input
                    value={post.title}
                    type="text"
                    placeholder="Title"
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                />

                {/* Неуправляемый компонент */}
                {/* <Input
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Description"
                /> */}
                <Input
                    value={post.body}
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                />
                <Button onClick={addNewPost}>Post</Button>
            </form>
            <PostList posts={posts} title={"Posts list"} />
        </div>
    )
}

export default App
