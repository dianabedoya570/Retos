/*Fix error: Devolución de precios válidos
Ha habido un problema de datos maestros que afectó los precios de los productos.
 Compruebe si cada producto tiene un precio válido (entero o flotante, y mayor o igual a cero). 
 Los productos con un precio de 0 son gratuitos y cuentan como un precio válido.*/

function hasValidPrice(product) {
    if(product&&(typeof product["price"]==="number")&& (product["price"]>= 0))
        return true
    else
        return false
}



console.log(hasValidPrice({ "product": "Milk", price: 1.50 }))	//true
console.log(hasValidPrice({ "product": "Cheese", price: -1 }))	//false
console.log(hasValidPrice({ "product": "Eggs", price: 0 }))	//true
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))	//false
console.log(hasValidPrice())
