import React from "react"
import { useState } from "react"
import Input from "./UI/input/Input"
import Button from "./UI/button/Button"

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: "", body: "" })

    function addNewPost(e) {
        setPost({ title: "", body: "" })

        const newPost = {
            ...post,
            id: Date.now(),
        }

        create(newPost)

        e.preventDefault()
    }

    return (
        <form action="post">
            {/* Управляемый компонент (двухстороннее связывание) */}
            <Input
                value={post.title}
                type="text"
                placeholder="Title"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
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
    )
}

export default PostForm
