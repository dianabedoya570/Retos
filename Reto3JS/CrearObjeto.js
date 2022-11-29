/*Escribe una función que tome dos arreglos (a y b) como argumentos. Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'. Devolver el objeto.

function myFunction(a, b) {

  return
}
Test Case	Expected
myFunction(['a','b','c'],[1,2,3])	{a:1,b:2,c:3}
myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}])	{a:1,b:() => {}, c:{name: 'khriztian'}}
myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false])	{name:'khriztian', hobbies:['music', 'tv series'], isAdmin:false}
Acceso a las propiedades del objeto
Escribir una función que tome un objeto con dos propiedades y un string como argumentos. Debe devolver el valor de la propiedad con clave igual al valor del string.
*/

function myFunction(obj, key) {
    const result={};
    for(let i=0; i<obj.length;i++){
        result[obj[i]]=key[i];

    }
  return result;
}

console.log(myFunction(['a','b','c'],[1,2,3]))
console.log(myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}]))
console.log((['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]))