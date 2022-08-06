
// 1) Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
//     Проверьте работу скрипта при a, равном 'test', 'тест', 3 Решить задачу через if-else.
// let a = "test"
// if (a === "test"){
//     console.log(true)
// }else {
//     console.log(false)
// }
//
// a === "test" ? console.log(true) : console.log(false)
//
// switch (a){
//     case 'test':
//         console.log(true)
//         break
//     default:
//         console.log(false)
// }
// 2) Сделайте рефакторинг кода, который вы видите на картинке, с помощью тернарного оператора.
//     демонстрационная картинка
// let number
// data = false
// data === true ? number = 2 : nubmer = 3
// console.log(number)
// let time = prompt("когда он собирается прийти в магазин? ")
// switch (time){
//     case "23:00":
//     case "01:00":
//     case "02:00":
//     case "03:00":
//     case "04:00":
//     case "05:00":
//     case "06:00":
//     case "07:00":
//     case "08:00":
//     case "09:00":
//     case "00:00":
//         console.log("В это время мы не работаем!")
//     break
//     case "09.00":
//     case "10.00":
//     case "11.00":
//     case "12.00":
//         console.log("Рады вас видеть")
//     break
//     case "13:00":
//     case "14:00":
//         console.log("Обед")
//     break
//     case "15:00":
//     case "16:00":
//     case "17:00":
//     case "18:00":
//     case "19:00":
//     case "20:00":
//     case "21:00":
//     case "22:00":
//         console.log("Рады вас видеть!")
// }
// let n = 52
//
// if (n > 50){
//     console.log("больше")
// }else {
//     console.log("меньше")
// }
// n > 50 ? console.log("больше") : console.log("меньше")
// let a = 3
// if (a === 0 || a ===2 ){
//     console.log(a + 7)
// }else {
//     console.log(a / 10)
// }
// a === 0 || a === 2 ? console.log(a + 7): console.log(a / 10)
// let person = confirm("Тебе есть 18+?")
// if (person){
//     console.log(true)
// }else {
//     console.log(false)
// }
// person ? console.log(true): console.log(false)
// let a = 3
// let b = 5
// if (a <= 1 && b >=3){
//     console.log(a + b)
// }else {
//     console.log(a - b)
// }
// a <=1 && b >=3 ? console.log(a + b): console.log(a - b)
// let Pasha = 17
// if (Pasha < 18){
//     console.log("Ребенок")
// }else {
//     console.log("Красавчик")
// }
// let seasons = "декабрь"
// switch (seasons) {
//     case "декабрь":
//     case "январь":
//     case "февраль":
//         console.log("зима")
//         break
//     case "апрель":
//     case "март":
//     case "май":
//         console.log("весна")
//         break
//     case "июнь":
//     case "июль":
//     case "август":
//         console.log("лето")
//         break
//     case "сентябрь":
//     case "октябрь":
//     case "ноябрь":
//         console.log("осень")
//         break
// }
let time = 23
switch (true){
    case time > 0 && time <=15:
        console.log("время относится к четверти часа")
        break
    case time > 15 && time <=30:
        console.log("время относится к половине часа")
        break
    case time > 30 && time <=45:
        console.log("время относится к 3/4 часа")
        break
    case time > 45 && time <=60:
        console.log("время относится к целому часу.")
    default:
        console.log(false)
}