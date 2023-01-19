
function Auto(){
    this.velocidad=0;
}
Auto.prototype.acelerar=function(vel){
        this.velocidad+=vel;
 }
 Auto.prototype.frenar=function(vel){
    this.velocidad= this.velocidad>=vel?this.velocidad-vel:0;
    
}

const a1 = new Auto();
console.log(a1.velocidad);// 0

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad);


a1.frenar(2);
console.log(a1.velocidad); // 1

a1.frenar(3);
// la velocidad quedaría en -1, así que se deja en 0
console.log(a1.velocidad); // 