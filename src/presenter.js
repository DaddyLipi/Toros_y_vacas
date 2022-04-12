import codigo from './codigo';
import {torosYvacas,victoria} from './torosyvacas';

const CS = document.querySelector("#CodigoSecreto");
const forms = document.querySelector("#form");
const div = document.querySelector("#resultado-divs");

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  let CSG = new codigo(CS.value);
  div.innerHTML = "<p>" + CSG.getcodigolength() + "</p>";
  module.exports={GSG};
});
