import codigo from './codigo.js';
import {torosYvacas,victoria} from './torosyvacas';
describe("Tests clase toros y vacas", () => {
    it("Devuelve la cadena", (
    ) => {
        const test = new codigo("12345",-1);
      expect(test.getClave()).toEqual("12345");
    });
    it("Devuelve el intento", (
        ) => {
            const test = new codigo("12345",3);
          expect(test.getPrueba()).toEqual(3);
    });
    it("Modifica el intento", (
        ) => {
            let test = new codigo("12345",1);
            test.setPrueba(2);
          expect(test.getPrueba()).toEqual(2);
    });
    it("Separa la cadena", (
        ) => {
          let test = new codigo("12345",1);
          expect(test.separarClave()).toEqual(["1", "2", "3", "4", "5"]);
          
   });
   it("Da el largo de la cadena", (
    ) => {
      let test = new codigo("12345",1);
      expect(test.getcodigolength()).toEqual(5);
    });
  });

  describe("Tests juegos toros y vacas", () => {
    it("Devuelve el tamanio de la cadena", () => {
      expect(torosYvacas()).toEqual(0);
    });
    it("Devuelve un toro", () => {
          expect(torosYvacas("1234","5638")).toEqual("!");
    });
    it("Devuelve un vaca", () => {
        expect(torosYvacas("5674","4321")).toEqual("*");
    });
    it("Devuelve toros y vacas", () => {
        expect(torosYvacas("4123","4312")).toEqual("!***");
    });
    it("Devuelve ternera",()=>{
      expect(torosYvacas("1234","8765")).toEqual("#")
    });
  });

  describe("Tests victoria", () => {
    it("Devuelve true si hay n toros", () => {
      expect(victoria("!!!!")).toEqual(true);
    });

  });