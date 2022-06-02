/*
Kreirajte funkciju na osnovu inputa i outputa. Pogledajte primjere, postoji
obrazac(pattern).
PRIMJERI:
secret(24) ➞ 8
secret(42) ➞ 8
secret(15) ➞ -4
secret(52) ➞ 15 */

// 5 - 2 * 5


const decomposeNumber = (number) => {
    const digits = [];
    while (number > 0) {
        digits.push(number % 10);
        number = Math.trunc(number / 10);
    }
    return digits.reverse();
}

const secret = (number) => {
const digits = decomposeNumber(number)

return (digits[0] - digits [1])* digits[0]

}
console.log(secret(15))