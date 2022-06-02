/*
3. Kreirajte funkciju koja vraća površinu presjeka dva pravougaonika. Funkcija će dobiti
dva pravougaonika, svaki sa koordinatama dva svoja suprotna ugla.
PRIMJER 1:
overlappingRectangles(
    l                   r
[{ x: 2, y: 1 }, { x: 5, y: 5 }],
[{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6 */
// min r0  - max l0  2
// r1 - l1 

const firstRectangle = [{ x: 2, y: 1 }, { x: 5, y: 5 }]
const secondRectangle = [{ x: 3, y: 2 }, { x: 5, y: 7 }]

const thirdRectangle = [{ x: -8, y: -7 }, { x: -4, y: 0 }]
const forthRectangle = [{ x: -50, y: -29 }, { x: -12, y: -22 }]


const overlappingRectangles = (array1, array2) =>{
    const element11 =array1[0];
    const element12 =array1[1];
    const element21 =array2[0];
    const element22 =array2[1];

    let x = Math.min(element12.x,element22.x) - Math.max(element11.x,element21.x)
    let y = Math.min(element12.y,element22.y) - Math.max(element11.y,element21.y)

    if (x<0 || y<0) return "Rectangles doesn't overlap."
    else return x*y

}
console.log(overlappingRectangles(thirdRectangle,forthRectangle))

