import variables from "../../stylesheets/abstracts/colors/_colors.module.scss"


export default interface IAction {
    iconUrl: string
    actionName: string
    color?: string
}

export const AuthorActions: IAction[] = [
    {
        iconUrl: require("../../images/icon-delete.svg"),
        actionName: "Delete",
        color: variables["red"],
    },
    {
        iconUrl: require("../../images/icon-edit.svg"),
        actionName: "Edit",
        color: variables["blue"],
    },
]

export const UserActions: IAction[] = [
    {
        iconUrl: require("../../images/icon-reply.svg"),
        actionName: "Reply",
        color: variables["blue"],
    },
]
