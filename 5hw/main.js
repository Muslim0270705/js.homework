// 1)Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let a = [1,2,3,4,5]
// for (let i = 0; i < a.length;i++){
//     console.log(a[i
//         ])
// }
// 2)Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result
// let a = [1,2,3,4,5]
// let result = 0
// for (let i = 0;i < a.length; i++ ){
//     result = result + a[i]
//
// }
// console.log(result)
// let i = 0
// while (i < 3){
//     console.log(`number ${i}!` )
//     i++
// }
// 4) Дан массив с числами [-2,7,9,5,8,1,12,15,17,3]. Вывести только те числа, которые больше нуля и меньше 10-ти.
// let a = [-2,7,9,5,8,1,12,15,17,3]
// for (let i = 0; i < a.length; i++){
//     if (a[i] > 0 && a[i] <10){
//         console.log(a[i])
//     }
// }
// 5) При помощи цикла for выведите чётные числа от 2 до 10

// for (let i = 0; i <= 10 ; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// 6) С помощью цикла for найдите сумму чисел от 1 до 100. Ответ должен быть 5051
// let a = 1
// for (let i = 0;i <=100 ; i ++){
//     a += i
//
// }
// console.log(a)
// 7) Вам дан массив брендов машин: ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']. Найдите в этом массиве только те бренды, в которых название состоит из заглавных букв и поместите их в новый массив.
// let a =['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']
// let b =[]
// for (let i = 0; i < a.length;i++){
//     if (a[i] === a[i].toUpperCase()){
//         b = [...b,a[i]]
//     }
// }
// console.log(b)
// 8) let arr = [2,3,4,5,6,7];
// с помощью цикла переберите массив и каждый элемент массива умножьте на 2, но не умножайте элемент равный 5. выведите в консоль новый массив с новыми значениями [4,6,8,5,12,14] и из полученного массива вывести только четные числа
// let arr = [2,3,4,5,6,7]
// let b = []
// for (let i = 0; i < arr.length;i++){
//     if (arr[i] !== 5){
//         arr[i] = arr[i] * 2
//     }
//     b = [...b, arr[i]]
//     if (arr [i] % 2 ===0){
//         console.log(arr[i])
//     }
//
// }
// console.log(b)
// 9)Дан массив [-2, 7, '9б', 'Vlad', 1, 12, 15, 'Ivan', 17, 3]. Вывести только строчные элементы из массива.
// let a = [-2, 7, '9б', 'Vlad', 1, 12, 15, 'Ivan', 17, 3]
// for (let i = 0; i < a.length;i++){
//     if (a[i] === a[i].toString()  ){
//         console.log(a[i])
//     }
// }
// 10) Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни замените на строку “выходной”.
// let a = ["Понедельник","Вторник","Cреда","Четверг","Пятница","Субота","Воскресение",]
// for (let i = 0; i < a.length;i++){
//     if (a[i] === a[5] ){
//         a[i] = "выходной"
//     }
//     if (a[i] === a[6] ){
//         a[i] = "выходной"
//     }
//
// }
// console.log(a)
// 11) У вас есть массив с именами: ['Наташа','Анастасия','Дмитрий','Максим']; С помощью цикла for. выведите в консоль все имена, за исключением Наташи.
// let a = ['Наташа','Анастасия','Дмитрий','Максим']
// a.shift()
// for (let i = 0; i < a.length;i++){
//     console.log(a[i])
// }
// 12
// let a = ['Наташа','Анастасия',2,'Максим',4]
// a.sort()
// for (let i = 0; i < a.length;i++){
//     console.log(a[i])
// }
// 13) С помощью цикла for, вывести в консоль таблицу умножения для числа 5, таблица умножения будет начинаться с 2 до 10. В результате вы увидите в консоли см. фото.
// let a = 5
// for (let i=2; i<10;i++){
//     console.log(a,"x",i,"=",a*i)
// // }
// const  a = (item) =>{
//     for (let i = 0; i < item.length; i++) {
//         console.log(item[i].split('').reverse().join(''))
//     }
// }
// console.log(a("anna"))
// console.log(a("bob"))
// console.log(a("cold"))
