function myFunction(a, b) {
    const  atributos=Object.keys(a);
    for(let i=0;i<atributos.length;i++){
        if(atributos[i]===b){
            return true;
        }
    }
    return false;
  }

  console.log(myFunction({a:1,b:2,c:3},'b'))
  console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
  console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] =arr[i] + 1
  }

  return arr
}
console.log(incrementItems([0, 1, 2, 3]))	
console.log(incrementItems([2, 4, 6, 8]))	
console.log(incrementItems([-1, -2, -3, -4]))	