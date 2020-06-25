function func(a) {
    return function (b) {
        return (a + b)
    }
}
const res = func(1);
console.log(res(2));