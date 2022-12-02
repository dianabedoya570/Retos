/*Estoy tratando de escribir una función para aplanar una matriz de subarreglos en un arreglo. (Supongamos que no sé que hay un método .flat() en el prototipo de Array).

En otras palabras, quiero transformar esto: [[1, 2], [3, 4]] en [1, 2, 3, 4].

Aquí está mi código:

function flatten(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.concat(arr[i])
  }
  return result
}*/

function flatten(arr) {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
      const a= arr[i];
      for( let j=0;j< a.length;j++){
        result.push(a[j])
      }  
    }
    return result
  }

 console.log(flatten([[1, 2], [3, 4]]))
 console.log (flatten([[1], [2], [3], [4]]))
 console.log(flatten([["a", "b"], ["c", "d"]]))
 console.log(flatten([[true, false], [false, false]]))