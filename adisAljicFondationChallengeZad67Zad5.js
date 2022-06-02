/* 5. Kreirajte funkciju koja broji koliko se usamljenih jedinica(1) pojavljuje u datom broju.
Usamljena znači da se broj 1 ne pojavljuje dvaput ili više zaredom.
PRIMJERI:
countLoneOnes(101) ➞ 2
countLoneOnes(1191) ➞ 1
countLoneOnes(1111) ➞ 0 */

//---

const decomposeNumber = (number) => {
    const digits = [];
    while (number > 0) {
        digits.push(number % 10);
        number = Math.trunc(number / 10);
    }
    return digits.reverse();
}

const countLoneOnes = (number) => {
    const nbr = decomposeNumber(number)
    let cnt = 0
  
     for (let i = 0; i < nbr.length; i++) {
         const element = nbr[i];
         
            if(element == 1) {

                    if(nbr[i-1] != 1 && nbr[i+1] !=1) cnt++

            }



     }
     return cnt
    }
  
console.log(countLoneOnes(101))