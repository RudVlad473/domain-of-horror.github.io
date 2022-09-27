let squareRootOfNine: number = 2
const numsArr: number[] = [1, 2, 3]

const tuple: [number, string, boolean] = [1, "str", false]

let tupleArr: [number, string][]
tupleArr = [
    [1, "Jack"],
    [2, "Vanessa"],
]

const union: string | number = 22

enum Direction1 {
    Up,
    Down = 10,
    Left,
    Right,
}

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: "Jack",
}

//type assertion

let cid: any = 1
let customerId = <number>cid
customerId = cid as number

//functions

function avg(x: number, y: number): number {
    return x + y
}

function logMessage(message: string | number): void {
    console.log(message)
}

//interfaces

interface IUser {
    readonly id: number
    name: string
    age?: number
}

const newUser: IUser = {
    id: 1,
    name: "John Wayne",
}

//interfaces with functions

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

//classes

interface IPerson {
    id: number
    name: string
    register(): string
}

class Person implements IPerson {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return "okay"
    }
}

//subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Sean", "Developer")

//Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(["str1", "str2", "str3"])
