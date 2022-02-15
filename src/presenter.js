
import {sumar, multiplicar} from "./operaciones";

const firsts = document.querySelector("#primer-numeros");
const seconds = document.querySelector("#segundo-numeros");
const forms = document.querySelector("#sumar-form");
const divs = document.querySelector("#resultado-divs");

const firstm = document.querySelector("#primer-numerom");
const secondm = document.querySelector("#segundo-numerom");
const formm = document.querySelector("#multiplicar-form");
const divm = document.querySelector("#resultado-divm");

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firsts.value);
  const secondNumber = Number.parseInt(seconds.value);

  divs.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstm.value);
  const secondNumber = Number.parseInt(secondm.value);

  divm.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});