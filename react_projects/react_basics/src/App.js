import React, { useEffect, useMemo, useRef, useState } from "react"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import "./styles/App.css"
import PostFilter from "./components/PostFilter"
import Modal from "./components/UI/modal/Modal"
import Button from "./components/UI/button/Button"
import { usePosts } from "./hooks/usePosts"
import PostService from "./API/PostService"

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: "", query: "" })
    const [modal, setModal] = useState(false)
    // const bodyInputRef = useRef()
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    async function fetchPosts() {
        const fetchedPosts = await PostService.getAll()

        setPosts(fetchedPosts)
    }

    return (
        <div className="App">
            <Button onClick={fetchPosts}>Log Posts</Button>
            <Button
                style={{ marginTop: "30px" }}
                onClick={() => setModal(true)}>
                Create
            </Button>
            <Modal
                visible={modal}
                setVisible={setModal}>
                <PostForm create={createPost} />
            </Modal>

            <hr style={{ margin: "15px 0" }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"Posts list"}
            />
        </div>
    )
}

export default App
