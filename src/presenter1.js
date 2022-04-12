import codigo from './codigo';

const CS = document.querySelector("#CodigoSecreto");
const form1 = document.querySelector("#formInsertar");
const div = document.querySelector("#resultado-divs");


form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const CSG = new codigo(CS.value);
  div.innerHTML = "Tamaño del codigo:" + CSG.getcodigolength();
  //CS.value="";
})
export default {CSG};
