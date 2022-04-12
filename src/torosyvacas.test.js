import codigo from './codigo.js';
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