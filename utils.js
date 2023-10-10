export const saludar = () => {
    alert("HELLO HELLO SNAPCHAT");
}
export class Persona{
    nombre="";
    #apellido="";

    constructor(nombre,apellido){
        this.nombre=nombre;
        this.#apellido=apellido;
    }

    saludar(){
        console.log("hola, mi nombre es",this.nombre);
        this.#gritarapellido()
    }
    #gritarapellido(){
        console.log("MI APELLIDO ES",this.#apellido)
    }
    
}
export class Titulo{
    constructor(texto){
        this.texto=texto
    }
    render() {
        const elementoP = document.createElement('p'); // Crear un elemento <p>
        elementoP.textContent = this.texto; // Asignar el texto al elemento <p>
        return elementoP; // Retornar el elemento creado
      }
}
