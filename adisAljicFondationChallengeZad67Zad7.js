/*
7. Zamislite ovaj trougao:
1
2 3
4 5 6
7 8 9 10
...
Kreirajte funkciju koja uzima broj n i vraća zbir svih brojeva u n-tom redu.
PRIMJERI:
rowSum(1) ➞ 1
rowSum(2) ➞ 5
rowSum(4) ➞ 34 */

const findSummRows = (number) => {
    const mat = [[1],[2,3],[4,5,6],[7,8,9,10]]
    console.table(mat)
    let summ = 0;
    for (let i = 0; i < mat[number-1].length; i++) {
            summ += mat[number-1][i]

    }
    return summ

}
console.log(findSummRows(4))