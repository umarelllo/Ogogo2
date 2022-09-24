let a = prompt ('Введите число: ')
if(isNaN(Number(a))) {
    alert('Error, enter the number')
}
let b = prompt ('Введите число: ')
if(isNaN(Number(b))) {
    alert('Error, enter the number')
}
let c = prompt ('Введите операцию + - / * : ')
if(c === '+') {
    alert(Number(a) + Number(b))
}

else if (c === '-') {
    alert(Number(a) - Number(b))
}

else if (c === '*') {
    alert(Number(a) * Number(b))
}

else if (c === '/') {
    alert(Number(a) / Number(b))
}

else {
    alert('Error, no such operation')
}
