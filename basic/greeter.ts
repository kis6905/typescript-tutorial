class Student {
    fullName: string
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter (person: Person): string {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new Student("Jane", "M.", "User")

let greeting = greeter(user)
console.log(greeting)
