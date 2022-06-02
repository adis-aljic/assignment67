/*
1. Kreirajte funkciju koja uzima niz objekata (namirnica) i izračunava ukupnu cijenu i
vraća je kao broj. Objekat ima ime proizvoda, količinu i cijenu.
PRIMJERI:
getTotalPrice([
{ product: "Milk", quantity: 2, price: 1.50 }
]) ➞ 3
getTotalPrice([
{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4 */

const createProduct = (product,quantity, price) => {
return {
    product,
    quantity,
    price

}
}
const Milk = createProduct("Milk",3,2.5)
const Cereals = createProduct("Cereals", 1,2.5)
const Juice = createProduct("Fanta", 10, 1.5)
const products = []
products.push(Milk,Cereals,Juice)
console.log(products)
const findTotalPrice = (array) => {
    let totalPrice = 0;
    for (let i = 0; i < array.length; i++) {
        const product = array[i];
        totalPrice += product.price * product.quantity
    }
    return totalPrice
}
console.log(findTotalPrice(products))