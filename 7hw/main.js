// Task 1
// Напишите функцию, которая принимает любое значение и возвращает шаблон ${val} typeof ${тип переменной val}. Для того, чтобы получить тип переменной - используйте конструкцию typeof val
//
// Input: 1
// Output: '1 typeof number'
// Input: true
// Output: 'true typeof boolean'
// const a = (elem) =>{
//     return `${elem} typeof ${typeof(elem)}`
// }
// console.log(a(true))

// Task 2
// Напишите функцию, которая принимает строку-число, а возвращает квадрат этого числа.
//     Пример кода:
//     Input : '3'
// Output :9
// Input:'5'
// Output: 25
// const  a = (str) =>{
//     return str * str
// }
// console.log(a("100"))

// Task 3
// Напишите функцию, которая принимает в себя три строки, поочередно берет по символу с каждой строки и возвращает одну строку.
//     Смотрите пример ниже!
//     Пример кода:
//
//     Input: 'this','test','lock'
// Output: 'ttlheoiscstk'
// Input: 'aa','bb','cc'
// Output :'abcabc'
// Input:'Bm', 'aa', 'tn'
// Output: 'Batman'
// const  a = (arr) =>{
//     return
// }
// console.log(a("abc"))
// Task 4
// Напишите функцию, которая принимает в качестве параметра строку, содержащую имя и фамилию человека, а возвращает инициалы, разделенные точкой.
// const func = (name) =>{
//     return name.split(2).map ((item) =>{
//         return item[0].substring(0,1).join('').toUpperCase()
//     })
// }
// console.log(func('Сергей Семёнов'))
// Task 5
// Напишите функцию, которая принимает в себя три параметра: name, city, region. Name - массив, с именем, именем фамилией или ФИО человека. City - город, region - область, куда отправился путешественник. Функция должна возвращать строку-приветствие путешественника. Смотрите пример ниже:
// const  func = (name,city,region) =>{

//     return `Привет ${name.join('')}! Добро пожаловать в ${city}, ${region}!   `
// }
// console.log(func(['Анастасия'], 'Миасс', 'Челябинская обл'))

// Task 6
// Напишите функцию, которая принимает число и возвращает Negative если число меньше нуля, Positive если больше нуля, Zero если равно нулю
// const func = (a) =>{
//     if (a < 0){
//         return 'Negative'
//     }
//     if (a > 0){
//         return 'Positive'
//     }
//     return "zero"
//
//
// }
// console.log(func(-1))
// Task 7
//
// Напишите функцию, которая принимает строку и из строчных букв делает прописные, а прописные - строчными.
// const func = (a) =>{
//     return a.split('').map((item) =>{
//         if (item.toLowerCase()){
//             return item.toUpperCase()
//         }
//         return item
//     } )
// }
// console.log(func('hello world'))
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
