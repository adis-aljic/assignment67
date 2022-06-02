/*
3. Pandigitalni broj sadrži sve cifre (0-9) barem jednom. Napišite funkciju koja uzima
cijeli broj, vraća true ako je cijeli broj pandigitalan, a false u suprotnom.
PRIMJERI:
isPandigital(98140723568910) ➞ true
isPandigital(90864523148909) ➞ false
isPandigital(112233445566778899) ➞ false */




const decomposeNumber = (number) => {
    const digits = [];
    while (number > 0) {
        digits.push(number % 10);
        number = Math.trunc(number / 10);
    }
    return digits;
}

const isPandigital = (number1) => {

    const controlDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const number = decomposeNumber(number1)
        let cnt = 0;
        for (let i = 0; i < controlDigits.length; i++) {
            const controlDigit = controlDigits[i];
            console.log(controlDigit)
            if (number.includes(controlDigit)) ++cnt
        }
        if (cnt == controlDigits.length) return true
        else return false
   
}
console.log(isPandigital(112233440567899))