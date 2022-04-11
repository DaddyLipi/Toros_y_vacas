import codigo from './codigo.js';
describe("Tests clase toros y vacas", () => {
    it("Devuelve la cadena", (
    ) => {
        const test = new codigo("12345",-1);
      expect(test.getClave()).toEqual("12345");
    });
  });