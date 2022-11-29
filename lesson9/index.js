//                                 Линейный поиск

// Search 9

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const searchNumber = (arr, searchElem) => {
    if(!arr && !searchElem) return null

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == searchElem) return i
    }
    return -1
}

const filtredNumbers = searchNumber(numbers, 10)

console.log(filtredNumbers) */

/* console.log(numbers.indexOf(10)) - второй вариант */ 

//--------------------------------------------------------------------------------------



//                                 Бинарный поиск


/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


function binarySearch(searchNumber, arr) {
    let first = 0;    //left endpoint
    let last = arr.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2); // floor - округление в меньшую сторону
        if (arr[middle] == searchNumber) {
            found = true;
            position = middle;
        } else if (arr[middle] > searchNumber) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position
    // return {key: position, item: arr[position]}
}

console.log(binarySearch(10, numbers))


const numbers2 = [5, 2, 3, 1, 6, 8, 9, 7, 12, 10, 11, 4]

const sorted = numbers2.sort((a, b) => a-b)
const result = binarySearch(10, sorted)
console.log(result) */


//--------------------------------------------------------------------------------------



//                                 Поиск строк

/* const users = ['Ogogo', 'Bootcamp']
const searchItem = 'Bootcamp'

const result = users.filter(item => {
    item.toLowerCase().includes(searchItem.toLowerCase())
})
console.log(result) */



//--------------------------------------------------------------------------------------


//                                 Задания


/* const fizzBuzz = n => {
    for (let i = 0; i <= n; i++) {
        if (i % 15 == 0) {
            console.log('FizzBuzz')
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else if (i % 3 == 0) {
            console.log('Fizz')
        }    
    }
}

fizzBuzz(100) */



/* new Promise((res, req) => {
    console.log('100') // макротаск, меньше приоритета
})

const a = 10 // микротаск, больше приоритета

const foo = () => {
    foo() // рекурсия, микротаск
} */


/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function binarySearch (array, item) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while (found === false && start <= end) {
        middle = Math.floor((start + end)/2)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        } else if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(array, 7))
 */

