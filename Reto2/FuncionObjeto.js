function myFunction(a, b) {
    const  atributos=Object.keys(a);
    for(let i=0;i<atributos.length;i++){
        if(atributos[i]===b){
          if( a[atributos[i]] !== undefined){
            return true;
          }
        }
    }
    return false;
  }

  console.log(myFunction({a:1,b:2,c:3},'b'))
  console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
  console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

