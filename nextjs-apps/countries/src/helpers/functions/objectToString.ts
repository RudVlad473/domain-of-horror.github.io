function objectToString(obj: Array<any> | Object) {
    return obj instanceof Object ? Object.values(obj).join(", ") : obj
}

export default objectToString
