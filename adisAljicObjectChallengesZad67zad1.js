/*
1. Kreirajte funkciju koja uzima niz fudbalskih klubova sa sljedecim properties: ime,
brojPobjeda, brojPoraza, brojNerjesenih, brojPostignutihGolova,
brojPrimljenihGolova i vraća naziv kluba sa najvećim brojem poena. Ako dvije ekipe
imaju isti broj bodova, vrati se tim sa najvećom gol razlikom.
Za pobjedu tim dobija 3 boda, za poraz dobija 0 bodova i za nerjesenu dobija 1 poen.
Testirati funkciju sa najmanje 5 klubova.
*/

const kreirajFudbalskiTim = (ime, brojPobjeda, brojPoraza, brojNerjesenih, brojPostignutihGolova, brojPrimjljenihGolova) => {
    return {
        ime,
        brojPobjeda,
        brojPoraza,
        brojNerjesenih,
        brojPostignutihGolova,
        brojPrimjljenihGolova,
        golRazlika: 0,
        brojBodova: 0
    }
}
const tim1 = kreirajFudbalskiTim("prvi Tim", 5, 3, 2, 10, 5)
const tim2 = kreirajFudbalskiTim("drugi Tim", 2, 5, 3, 5, 10)
const tim3 = kreirajFudbalskiTim("treci Tim", 2, 2, 6, 11, 4)
const tim4 = kreirajFudbalskiTim("cetvrti Tim", 7, 2, 1, 16, 4)
const tim5 = kreirajFudbalskiTim("peti Tim", 3, 4, 3, 11, 4)
const timovi = [];
timovi.push(tim1, tim2, tim3, tim4, tim5)
const pronadjiGolRazlikuIBodove = (array) => {
    for (let i = 0; i < array.length; i++) {
        const tim = array[i];
        tim.golRazlika = tim.brojPostignutihGolova - tim.brojPrimjljenihGolova
        tim.brojBodova = tim.brojPobjeda * 3 + tim.brojNerjesenih
    }
}
pronadjiGolRazlikuIBodove(timovi)
// console.log(tim1)
// console.log(tim2)
// console.log(tim3)

pronadjiNajboljiTim = (array) => {
    let brojBodovaTimova = [];
    for (let i = 0; i < array.length; i++) {
        const tim = array[i];
        brojBodovaTimova.push(tim.brojBodova)
    }

    const NajvecimBrojBodova = Math.max(...brojBodovaTimova)
    const indexTimaSaNajvecimBrojembodova = brojBodovaTimova.indexOf(NajvecimBrojBodova)
    let cnt = 0
    for (let i = 0; i < brojBodovaTimova.length; i++) {
        const element = brojBodovaTimova[i];
        if (element == NajvecimBrojBodova) cnt++

    }
    if (cnt == 1) return timovi[indexTimaSaNajvecimBrojembodova].ime
    else {
        const NajvecimBrojBodova = Math.max(...brojBodovaTimova)
        const indexTimaSaNajvecimBrojembodova = brojBodovaTimova.indexOf(NajvecimBrojBodova)
        const timoviSaIstimBrojemBodova = []
        for (let i = 0; i < array.length; i++) {
            const tim = array[i];
            if (tim.brojBodova == NajvecimBrojBodova) timoviSaIstimBrojemBodova.push(tim)
        }
        const golRazlikaTimovaSaIstimBrojemBodova = [];
        for (let i = 0; i < timoviSaIstimBrojemBodova.length; i++) {
            const tim = timoviSaIstimBrojemBodova[i];
            golRazlikaTimovaSaIstimBrojemBodova.push(tim.golRazlika)
        }
        const najvecaGoldRazlika = Math.max(...golRazlikaTimovaSaIstimBrojemBodova)
        const IndexClanasaNajvecomGolRazlikom = golRazlikaTimovaSaIstimBrojemBodova.indexOf(najvecaGoldRazlika)

        return timoviSaIstimBrojemBodova[IndexClanasaNajvecomGolRazlikom].ime

    }

}
console.table(timovi)

console.log(pronadjiNajboljiTim(timovi))