/*Fix Error: Valor vs. Referencia de Tipos
Cree una función que devuelva true si dos arreglos contienen valores idénticos y false en caso contrario.

Para resolver esta pregunta, tu amigo escribe el siguiente código:

function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
Pero probando el código, ves que algo no está del todo bien. Ejecutar el código arroja los siguientes resultados:

checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened? */

function checkEquals(arr1, arr2) {
    if (arr1 === arr2) {
      return true
     } else {
      return false
     }
    }

console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 5, 6]))	
console.log(checkEquals([4, 7, 6], [4, 6, 7]))	