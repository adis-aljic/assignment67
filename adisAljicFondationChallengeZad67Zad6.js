/*
Kreirajte funkciju koja vraća broj na osnovu broja tužnih i nasmijanih lica.
Sretna lica :) i (: vrijede 1.
Tužna lica :( i ): vrijede -1.
PRIMJERI:
happinessNumber(":):(") ➞ -1
happinessNumber("(:)") ➞ 2
happinessNumber("::::") ➞ 0 */


const happinessNumber = (string) => {
    let cnt = 0;
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] == ":" && string[i + 1] == "(") cnt -= 1
         if (string[i] == ")" && string[i + 1] == ":") cnt -= 1
         if (string[i] == "(" && string[i + 1] == ":") cnt += 1
         if (string[i] == ":" && string[i + 1] == ")") cnt += 1
    }
    return cnt
}

console.log(happinessNumber("::()::"))