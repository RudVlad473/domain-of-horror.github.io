import User from "./activeUser"

export default function getHTMLbar(
    id,
    topic,
    topicUrl,
    activeUsersList,
    repliesCount,
    viewsCount,
    activityTime
) {
    return `<tr class="bar">
                <td class="number">${id}</td>
                <td class="topic">
                    <a href="${topicUrl}" target="_blank">
                        <article class="topic__article">
                            ${topic}
                        </article>
                    </a>
                </td>
                <td>
                    <div class="active-users">
                        ${activeUsersList}
                    </div>                                       
                </td>
                <td class="replies">
                    ${repliesCount}
                </td>
                <td class="views">
                    ${viewsCount}
                </td>
                <td class="activity">
                    ${activityTime}
                </td>
            </tr>`
}
