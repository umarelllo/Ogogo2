let firstName = ''
let lastName = ''
let workDays = ''
let salaryMonth = ''
while (
    firstName === '' ||
    lastName === '' ||
    workDays === '' ||
    salaryMonth === '' )
{
firstName = prompt('Введите имя:')
if (firstName === '') {
    alert('Error')
    while (firstName === ''){
    firstName = prompt('Введите имя:')
        }
    }
lastName = prompt('Введите фамилию:')
if (lastName === '') {
    alert('Error')
    while (lastName === ''){
        lastName = prompt('Введите фамилию:')
        }
    }
workDays = prompt('Количество отработанных дней за месяц:') 
if (workDays === '') {
    alert('Error')
    while (workDays === ''){
        workDays = prompt('Количество отработанных дней за месяц::')
        }
    }
salaryMonth = prompt('Зарплата:') 
if (salaryMonth === '') {
    alert('Error')
    while (salaryMonth === ''){
        salaryMonth = prompt('Зарплата:')
        }
    }
}   

let worker = {
    name: firstName ,
    lastname: lastName ,
    dayswork: workDays ,
    salary: salaryMonth ,
}

alert(Object.values(worker))