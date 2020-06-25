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
