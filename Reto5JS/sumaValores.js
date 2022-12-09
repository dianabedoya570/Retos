/*Escribir una función que tome un objeto como argumento. Devuelve la suma de todos los valores de 
las propiedades del objeto.
*/
function myFunction(obj) {
  let sum=0
  let obj={}
  for (const property in obj) {
    sum+=obj[property];
  }

  return sum
}
//Test Case	Expected
console.log(myFunction({a:1,b:2,c:3}))	//6
console.log(myFunction({j:9,i:2,x:3,z:4}))//	18
console.log(myFunction({w:15,x:22,y:13}))/	50