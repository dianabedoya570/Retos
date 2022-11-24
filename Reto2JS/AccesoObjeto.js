/*Escribir una función que tome un objeto con dos propiedades y un string como argumentos. Debe devolver el valor de la propiedad con clave igual al valor del string.

function myFunction(obj, key) {

  return
}
Test Case	Expected
myFunction({ continent: 'Asia', country: 'Japan'}, 'continent')	'Asia'
myFunction({ country: 'Sweden', continent: 'Europe'}, 'country')	'Sweden'
myFunction({ name: 'khriztian', 'fav-number': 33, age: 18 }, 'fav-number') 33	*/

function myFunction(obj, key){
     return obj[key];

}
console.log(myFunction({ continent: 'Asia', country: 'Japan'}, 'continent'));
console.log(myFunction({ country: 'Sweden', continent: 'Europe'}, 'country'));
console.log(myFunction({ name: 'khriztian', 'fav-number': 33, age: 18 }, 'fav-number'));
console.log(myFunction({ name: 'khriztian', 'fav-number': 33, age: 18 }, 'number'));