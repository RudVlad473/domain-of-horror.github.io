function camelCaseToNormal(camelCaseStr: string): string {
    return camelCaseStr.replace(/([a-z])([A-Z])/g, "$1 $2")
}

export default camelCaseToNormal
