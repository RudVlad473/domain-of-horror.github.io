import axios from "axios"

export const freecodecamp30latestPostsUrl =
    "https://forum-proxy.freecodecamp.rocks/latest"

export default async function getDataAsync(url) {
    const body = await axios.get(url)
    return body.data
}


