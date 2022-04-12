import codigo from './codigo';
//import {CSG} from './presenter1';
import {torosYvacas,victoria} from './torosyvacas';

const CI = document.querySelector("#codigoIntento");
const form2 = document.querySelector("#formAdivinar");
const div2 = document.querySelector("#resultado-div2");

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const C = new codigo(CI.value);
  div2.innerHTML = "<p>" +"Muestra resultado"+C.getClave() + "</p>";
});