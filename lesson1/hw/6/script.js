let firstName = ''
let lastName = ''
let workDays = ''
let salaryMonth = ''
while (
    firstName === ''
){
firstName = prompt('Введите имя:')
if (firstName === 'Айдар' || firstName === 'Андрей' || firstName === 'Иван') {
    while (firstName === 'Айдар' || firstName === 'Андрей' || firstName === 'Иван'){
    alert('Error')
    firstName = prompt('Введите имя:')
    }
}
lastName = prompt('Введите фамилию:')
workDays = prompt('Количество отработанных дней за месяц:') 
salaryMonth = prompt('Зарплата:') 
}

let worker = {
    name: firstName ,
    lastname: lastName ,
    dayswork: workDays ,
    salary: salaryMonth ,
}

alert(Object.values(worker))


