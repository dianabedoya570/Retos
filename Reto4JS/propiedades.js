function myFunction(obj) {
    const atributos= Object.keys(obj)
    let anidados;
    for (let i=0; i< atributos.length;i++){
        anidados=Object.keys(obj[atributos[i]])
        if(obj[atributos[i]].b!=undefined){
            return obj[atributos[i]].b
        }
        else{
            return undefined
        }
    }

  }
  console.log(myFunction({a:1}))
 console.log( myFunction({a:{b:{c:3}}}))
 console.log(myFunction({b:{a:1}}))
 console.log( myFunction({a:{b:2}}))