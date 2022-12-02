export default class User {
    constructor(id, avatarUrl, nickname, profileUrl) {
        this.id = id
        this.avatarUrl = avatarUrl
        this.nickname = nickname
        this.profileUrl = profileUrl
    }

    getUserHtml() {
        return `<div class="avatar" title="${this.nickname}">
                    <a href="${this.profileUrl}" target="_blank">
                        <img class="avatar__img" src="${this.avatarUrl}" alt="pic" loading="lazy">
                    </a>
                </div>`
    }
}

export function getUsersMap(users) {
    return new Map(
        users.map((user) => [
            user["id"],
            new User(
                user["id"],
                `https://freecodecamp.org/forum${user[
                    "avatar_template"
                ].replace("{size}", "30")}`,
                user["username"],
                `https://www.freecodecamp.org/forum/u/${user["username"]}`
            ),
        ])
    )
}
