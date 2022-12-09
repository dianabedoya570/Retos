/*Escribir una función que tome un objeto y un string como argumentos. Eliminar la propiedad del objeto con 
clave igual al string.*/

function myFunction(obj, key) {
    if(Object.hasOwn(obj,key)){
        delete obj[key]
    }
  return obj
}

console.log(myFunction({a:1,b:2,c:3},'b'))	//{a:1,c:3}
console.log(myFunction({a:1,b:2,c:3},'a'))	//{b:2,c:3}
console.log(myFunction({a:1,b:2,c:3},'c'))	//{a:1,b:2}