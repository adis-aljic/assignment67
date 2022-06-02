/*
2. Napisati funkciju koja provjerava jednakost dva objekta. Dva objekta su jednaka
ukoliko su vrijednosti svih propertija oba objekta jednake. */

prviObjekat = {
    a: 1,
    b: 2
}
drugiObjekat = {
    a: 1,
    b: 2,
}


const findIsObjectEqual = (object1, object2) => {
    if (Object.keys(object1).length != Object.keys(object2).length) return false
    else {
        let cnt = 0
        for (const property1 in object1) {
            for (const property2 in object2) {
                if (object1[property1] === object2[property2]) cnt++
            }
        }
        if (cnt == Object.keys(object1).length) return true
        else return false
    }

}
console.log(findIsObjectEqual(prviObjekat, drugiObjekat))