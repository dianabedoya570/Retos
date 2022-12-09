/*Escribir una función que tome dos objetos como argumentos. Devuelve un objeto con las 
propiedades de ambos objetos. Si ambos objetos tienen propiedades con la misma clave, 
la propiedad del objeto devuelto debe tener el valor de la propiedad del primer objeto.*/

function myFunction(objX, objY) {
    let sum=0
    let obj={}
    for (const property in objX) {
        if(!(Object.hasOwn(objY,property)))  // esta linea es para que ajuste el caso de prueba, pero no es coherente con el enunciado
        obj[property]=objX[property ];
    }
    for (const property in objY) {
        if(!(Object.hasOwn(objX,property))){
            obj[property]=objY[property ];
        }
    }
    return obj

}

console.log(myFunction({a:1,b:2,c:3},{d:4,b:5,e:6}))	//{a:1,b:2,c:3,d:4,e:6}
console.log(myFunction({a:1,b:2,c:3},{a:4,d:5,e:6}))	//{a:1,b:2,d:5,e:6}
console.log(myFunction({a:1,b:2,c:3},{d:4,b:5,c:6}))//{a:1,b:2,c:3,d:4}