let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
sum = salaries.John+salaries.Ann+salaries.Pete
console.log(sum)
let a = {
    name: "Ivan",
    age: 26,
}
console.log(a)

let b = {
    name: "Ivan",
    age: 26,
}

b.age = b.age + 5;

console.log(b)

let c = {
    name: "Ivan",
    age: 26,
    student: true,
}
c.student = false
console.log(c)
let d = {
    name: "ABRACADABRA",
    age: 15,
    student: true,
}
console.log(d.name.includes("BRACA"))
let i = {
    name: "Ivan",
    age: 26,
    student: true,
}

console.log(Object.values(i))
console.log(Object.keys(i))
let l = {
    name: "Ivan",
    age: 26,
    student: true,
}
a = JSON.stringify(l);
b = JSON.parse(a);
b.name = "Max"


console.log(l)
console.log(b)
cars = ['bmw', 'honda','mers','lexus']

console.log(cars.splice(0 , 3))
car = ['bmw', 'honda','mers','lexus']
console.log(car.splice(-1))
cars = ['bmw', 'honda','mers','lexus']
cars[1] = 'toyota'
console.log(cars)
cars = ['bmw', 'honda','mers','lexus']
cars[4] = 'kia'
console.log(cars)
cars = ['bmw', 'honda','mers','lexus']
console.log(cars.length)
