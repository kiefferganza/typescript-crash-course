let fullname: string = 'kieffer'
let isTrue: boolean = true
let ids: any[] = [1,2,3,4,5,'kieffer']

//tuple
let person: [number,string,boolean] = [1,'a',true]

//tuple arr
let emp: [number, string] []


//union
let id: string | number = 22

//enum
enum Direction1 {
    Up = 1 ,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up' ,
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//obj
type User = {
    name: string,
    age: number
}

const user: User = {
    name: 'kieffer',
    age: 3
}

//type assertion
let cid: any = 1
let customerId = <number>cid

 //functions 
 function addNum(x: number, y: number): number {
     return x + y
 }

 //interface
interface UserInterface {
    readonly id: number,
    name: string
    age?: number
}

const User1: UserInterface = {
    id: 1,
    name: 'kieffer'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y


interface PersonInterface {
    id: number,
    name: string
    register(): string
}

//classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id + 1
        this.name = name
    }

    register() {
        return `${this.name} is now fucking registered as a Person`
    }
}

const test = new Person(123,'kieffer')

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }

     
}

const employee = new Employee(3,'Kieffer CLone', 'Dev')

//generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4])
let strArr = getArray<string>(['k1','k2','k3'])