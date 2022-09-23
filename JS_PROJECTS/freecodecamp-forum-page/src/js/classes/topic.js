import User from "./activeUser"
import arrayToString from "./arrayToString"
export default function getTopics(topics, users) {
    const mappedTopics = topics.map((topic) => ({
        title: topic.title,
        repliesCount: topic.reply_count,
        viewsCount: topic.views,
        activity: getHoursOfActivity(topic.created_at, topic.last_posted_at),
        topicUrl: `https://forum.freecodecamp.org/t/${topic.slug}`,
        activeUsers: arrayToString(
            topic.posters.map((poster) =>
                getUserById(poster.user_id, users).getUserHtml()
            )
        ),
    }))

    // mappedTopics.forEach((topic) => addRelatedActiveUsersToTopic(topic, users))

    return mappedTopics

    function getUserById(id, userMap) {
        const user = userMap.get(id)
        return new User(
            id,
            user.avatarUrl.replace("{size}", "25"),
            user.fullName,
            `https://forum.freecodecamp.org/${user.fullName}`
        )
    }
}

export function getHoursOfActivity(creatingDate, lastPostDate) {
    const milliseconds = BigInt(new Date(lastPostDate) - new Date(creatingDate))
    return Math.floor(
        Number((milliseconds / BigInt(1000 * 60 * 60)) % BigInt(24))
    )
}
