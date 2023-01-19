function Persona(nombre, peso, altura){
    this.nombre=nombre;
    this.peso=peso;
    this.altura=altura;
}
Persona.prototype.saludar=function(nombre){
        return console.log(`Hola ${nombre} me llamo ${this.nombre}`);
 }
Persona.prototype.bmi=function(){
    
    return(console.log(this.peso / Math.pow(this.altura,2)));
}

const pedro = new Persona("Pedro", 72, 1.5);
pedro.saludar("Maria"); // "Hola Maria, me llamo Pedro"
pedro.bmi(); // 32
