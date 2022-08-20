// 1 На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.
// const func = (arr) =>{
//     return arr.map((item) =>{
//         return item * 2
//
//     })
// }
// console.log(func([1,2,3]))
// // 2 Напишите функцию, которая будет удалять каждый второй элемент в массиве. Цикл for использовать запрещено!
// const func = arr => arr.filter((item,idx) => idx % 2 === 0)
//
// console.log(func(['Привет', 'Пока', 'Снова привет']))
// Task3
// Возьмите массив с числами, а верните массив, в котором отрицательные числа, становятся положительными, а положительные - отрицательными.
// const func = arr => arr.map((item) =>{
//     if (item === 0){
//         return item
//     }else {
//         return item * -1
//     }
// })
//
// console.log(func([1, 2, 3, 4, 5]))
// Task4
// Напишите функцию, которая принимает в качестве аргументов 2 параметра: массив и число, а возвращает новый массив с тем кол-вом элементов с начала массива, которое было указано в числе.
// const func = (arr,num)=> {
//     return arr.filter(item => item <= num)
//
// }
//
// console.log(func([1, 2, 3, 4, 5] , 3))
// const func = (arr)=> {
//     return arr.filter((item,idx) =>{
//         return item % idx === 0
//     })
//
// }
//
// console.log(func( [22, -6, 32, 82, 9, 25]))
// const func = (arr)=> {
//     return arr.map((item) => {
//         if (typeof item === 'string'){
//             return item = null
//         }
//         else {
//             return item
//         }
//     })
//
// }
//
// console.log(func( [4, 6, 'Ivan', 5, 'Denis ']))
// const func = (arr)=> {
//     return arr.filter((item) =>{
//         return item.trim().length <= 5
//     })
//
// }
//
// console.log(func( ['Евдоким','Ivan', 'Игнат', 'Denis ']))
// const func = (arr)=> {
//     return arr.map ((item) => {
//         return item ** 3
//     }).map(item => item % 3 === 0 && item % 5 === 0 ? item = 0 : item )
//
// }
//
// console.log(func( [7, 8, 15, 30, 2] ))
// Task9
// Напишите функцию, которая принимает на вход массив слов ,
//     и возвращает массив чисел, являющихся длинной слов.
//
//     input: ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']
// output: [6, 6, 5, 5, 6]
// const func = (arr) =>{
//     return arr.map((item) =>{
//         return item.length
//     })
// }
// console.log(func(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ))
//     Task10
//     Напишите функцию, которая принимает массив чисел
//     и возвращает массив строк по шаблону <div>{number}</div>
//
//     input: [1, 2, 3, 4, 5 ]
//     output: [ <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div> ]
// const func = (arr) =>{
//     return arr.map((item) =>{
//         return `<div>${item}</div>`
//     })
// }
// console.log(func([1, 2, 3, 4, 5 ] ))
// Task11
// Напишите функцию, которая принимает массив строк
// и возвращает массив строк с четным количеством букв
//
// Input: ['ab', 'abc', 'abcd']
// Output: ['ab', 'abcd']
// const func = (arr) =>{
//     return arr.filter((item) =>{
//         return item.length % 2 === 0
//     })
// }
// console.log(func(['ab', 'abc', 'abcd'] ))