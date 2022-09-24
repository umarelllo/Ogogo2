const firstName = prompt('Введите имя:')
const lastName = prompt('Введите фамилию:')
const workDays = prompt('Количество отработанных дней за месяц:') 
const salaryMonth = prompt('Зарплата:') 
const worker = {
    name: firstName,
    lastname: lastName,
    dayswork: workDays,
    salary: salaryMonth,
}
alert(Object.values(worker))