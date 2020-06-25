function isPrimeNum(a) {
    if (a === 2) {
        return 'Число простое'
    }
    if (a > 1 && a <= 1000) {
       for (let i = 2; i < a; i++) {
           if (a % i === 0) {
               return 'Число составное'
           }
       }
        for (let i = 2; i < a; i++) {
            if (a % i !== 0) {
                return 'Число простое'
            }
        }
    } else return 'Число должно быть больше 1 и меньше 1000'
}
const str = `${isPrimeNum()}`;
console.log(str)