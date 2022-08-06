// У вас есть переменная a = ’34’.
// Написать все варианты перевода типа данных на число.
let a = 34
console.log(+a)
console.log(Number(a))
console.log(a * 1)
console.log(parseInt(a))
console.log(parseFloat(a))

// У вас есть переменная b = 29.92.
//     Написать все варинты округления и задать комментарий с описанием работы данного варианта.
let b = 29.92
// Округление в меньшую сторону Math.floor
console.log(Math.floor(b))
// Округление в большую сторону Math.ceil
console.log(Math.ceil(b))
// Округление до ближайшего целого Math.round
console.log(Math.round(b))
// Производит удаление дробной части без округления Math.trunc
console.log(Math.trunc(b))
// 3. Получить рандомное число от 1 - 10 , 30 - 90, 200 -500.
console.log(Math.ceil(Math.random() * 10 ))
console.log(Math.ceil(Math.random() * 60 ) + 30)
console.log(Math.ceil(Math.random() * 300 ) + 200)
// 4. У вас есть переменная c = ‘aBRAcADBRA’.
// Написать метод для изменения регистра строки.
let c = "aBRAcADBRA"
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c[2].toLowerCase())
// У вас есть переменная d = ‘Hello world’.
// В консоль вывести первый, второй , предпоследний и последний символ.
let d = "Hello world"
console.log(d[0],d[1],d[d.length -1])
// У вас есть переменная f = ‘abracaDabra’.
// Написать все варианты поиска подстроки и задать комментарий с описанием данного варианта.
let f = 'abracaDabra'
// Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
// Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но позиция не нужна:
console.log(f.includes('ab'))
// Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции:
console.log(f.includes('Dabr', 5))
// Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
console.log(f.startsWith("abra"))
console.log(f.endsWith("Dabra"))
console.log(f.indexOf("D"))
console.log(f.lastIndexOf("D"))
// 8. У вас есть переменная g = ‘Propagination’.
// Написать все варианты получения подстроки и задать комментарий с описанием данного варианта.
let g = "Propagination"
// Если аргумент end отсутствует, slice возвращает символы до конца строки:
console.log(g.slice(0 , 5))
console.log(g.substring(0 , 5))
// Возвращает часть строки от start длины length.
//
//     В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции:
console.log(g.substr(2,6))