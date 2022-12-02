function getAvatarImagePathByUsername(username: string): string {
    return require(`../../images/avatars/image-${username}.png`)
}

export default getAvatarImagePathByUsername
