/* 5. Kreirajte funkciju koja broji koliko se usamljenih jedinica(1) pojavljuje u datom broju.
Usamljena znači da se broj 1 ne pojavljuje dvaput ili više zaredom.
PRIMJERI:
countLoneOnes(101) ➞ 2
countLoneOnes(1191) ➞ 1
countLoneOnes(1111) ➞ 0 */

const countLoneOnes = (number) => {

    let nbr = "" + number
    let cnt = 0
    for (let i = 0; i < nbr.length-1; i++) {
        if (nbr[i] != 1) {
                if(nbr[i+1] == 1) cnt++



        }
        else continue
    }
    return cnt

}
console.log(countLoneOnes(1001))