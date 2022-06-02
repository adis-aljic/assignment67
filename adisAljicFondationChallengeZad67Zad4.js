/*
4. Kreirajte funkciju za provjeru da li je dati cijeli broj faktorijel cijelog broja ili ne.
Vrijednost koju funkcija vraca je boolean.
PRIMJERI:
isFactorial(2) ➞ true
// 2 = 2 * 1 = 2!
isFactorial(27) ➞ false
isFactorial(24) ➞ true
// 24 = 4 * 3 * 2 * 1 = 4! */



const findFactorial = (number) => {
    let factor = 1
    let product = 1
    for(let i = number; i > 1; i--) {
        factor = (i - 1)
        product *= factor
    }
    return number*product
}


const isFactorial = (number) => {
    const factors = [];
    let nbr = 0;
    for (let i = 2; i < 24; i++) {
        if (number%i == 0) factors.push(i)  
    }
    for (let i = 0; i < factors.length; i++) {
        const factor = factors[i];
        if(findFactorial(factor) == number) nbr += factor        
    }
if (factors.includes(nbr)) return true
else return false
        
}
console.log(isFactorial(126))