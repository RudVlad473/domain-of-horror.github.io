class Group {
    constructor() {
        let group = []

        this.add = (value) => {
            if (!this.has(value)) {
                group.push(value)
                return true
            }
            return false
        }

        this.delete = (value) => {
            let index = group.indexOf(value)
            if (index) {
                group.splice(index, 1)
                return true
            }
            return false
        }

        this.has = (value) => {
            return group.indexOf(value) !== -1
        }

        this.get = (index) => {
            return group[index]
        }

        this.length = () => {
            return group.length
        }

        this.from = (iteratable) => {
            let newGroup = new Group()
            for (let value of iteratable) {
                newGroup.add(value)
            }
            return newGroup
        }
    }

    static from(iteratable) {
        let newGroup = new Group()
        for (let value of iteratable) {
            newGroup.add(value)
        }
        return newGroup
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group
        this.current = 0
    }

    next() {
        if (this.current === this.group.length() || !this.group.length())
            return { done: true }

        let value = this.group.get(this.current)
        this.current++

        return { value, done: false }
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this)
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value)
}
