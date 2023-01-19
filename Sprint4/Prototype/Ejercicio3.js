
String.prototype.palindrome=function(){
    let i=0, j
    j=this.length-1
    while(i<j){
               if(this.charAt(i)===' '){
            i++;
        }
        if(this.charAt(j)===' '){
            j--; 
        }
        if(this.charAt(i)!==this.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
 }

 console.log("anita lava la tina".palindrome()) // true
 console.log("prueba".palindrome()) // false