import User, { getUsersMap } from "../classes/activeUser"
import getHTMLbar from "../classes/bar"
import getTopics from "../classes/topic"

export default async function getAllHtmlBars(requestPromise) {
    const requestBody = await requestPromise

    /*
            id: 1,
            {
                'https://some-avatar-link.com',
                'John Doe',
                'https://some-user-profile-link.com
            }
    */

    const users = getUsersMap(requestBody.users)
    //TODO: добавить ссылку на доп. статьи
    const topics = getTopics(requestBody.topic_list.topics, users)

    const htmlBars = topics.map((topic, index) =>
        getHTMLbar(
            index + 1,
            topic.title,
            topic.topicUrl,
            topic.activeUsers,
            topic.repliesCount,
            topic.viewsCount,
            topic.activity
        )
    )

    return htmlBars
}
