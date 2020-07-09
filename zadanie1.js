let arr = [6, true, "Строка", null, 3, 2, 11, 0, 23, 43, 0, 44, 12, 25, undefined];
let arrOdd = [];
let arrEven = [];
let arrZero = [];

function sumOfOddEvenElems(){
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i]) && arr[i] !== 0) {
            if (arr[i] % 2 !== 0)  {
                arrOdd.push(arr[i]);
            } else {
                arrEven.push(arr[i]);
            }
        }
        if (arr[i] === 0) {
            arrZero.push(arr[i]);
        }
    }
    console.log("Количество нечетных элементов: " + arrOdd.length);
    console.log("Количество четных элементов: " + arrEven.length);
    console.log("Количество нулей: " + arrZero.length);
}

sumOfOddEvenElems()

// Задание выполнено верно, однако правильнее было бы передавать массив в функцию в качестве аргумента, чтобы в теории эту функцию можно было потом использовать и на других массивах. К примеру так:


// И ещё пару замечаний:
// 1. Переменные, которые используются только внутри функции, лучше объявлять внутри функции, а не снаружи. Имею в виду arrOdd, arrEven, arrZero
// 2. В данном случае для подсчёта количества элементов избыточно использовать массивы, будет достаточно обычных числовых переменных.

// Более корректный вариант:

function printSumOfElements(arr){
    let arrOdd = 0;
    let arrEven = 0;
    let arrZero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i]) && arr[i] !== 0) {
            if (arr[i] % 2 !== 0)  {
                arrOdd++;
            } else {
                arrEven++;
            }
        }
        if (arr[i] === 0) {
            arrZero++;
        }
    }
    console.log("Количество нечетных элементов: " + arrOdd);
    console.log("Количество четных элементов: " + arrEven);
    console.log("Количество нулей: " + arrZero);
}

printSumOfElements([6, true, "Строка", null, 3, 2, 11, 0, 23, 43, 0, 44, 12, 25, undefined]);
printSumOfElements([0, "14", false, 4, 6]);