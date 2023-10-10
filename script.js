import { Titulo } from "./utils.js";
const textos = ["Texto número 1", "Texto número 2", "Texto número 3"];

const contenedor = document.createElement('section'); // Crear un contenedor/section

for (const texto of textos) {
  const titulo = new Titulo(texto); 
  const elementoRenderizado = titulo.render(); 
  contenedor.appendChild(elementoRenderizado); 
}

  document.body.appendChild(contenedor);
  
  
  
  