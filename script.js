const titulo = document.getElementById("titulo");
const textoInicial = document.getElementById("textoInicial");
let estadoInicial = true;
let posicionTexto = 0;
const textos = ["hola", "Bienvenides", "a", "esta", "página", "web"];

textoInicial.innerText = textos[0];

textoInicial.addEventListener("click", () => {
   if (posicionTexto < textos.length - 1) {
   posicionTexto = posicionTexto+1;
   textoInicial.innerText = textos[posicionTexto]
}else {posicionTexto = 0
   textoInicial.innerText = textos [posicionTexto];}
})

titulo.addEventListener("click", ()=> {
   if(estadoInicial === true) {
      titulo.innerText = "Bienvenides";
   }
   else {titulo.innerText = "hola"; }
      estadoInicial=!estadoInicial;
})
