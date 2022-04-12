class codigo{
    constructor(Clave,Prueba)
    {
        this.Clave=Clave;
        this.Prueba=Prueba;
    }
    getClave()
    {
        return this.Clave;
    }
    setPrueba(intento)
    {
        this.Prueba = intento;
    }
    getPrueba()
    {
        return this.Prueba;
    }
    separarClave()
    {
        return this.Clave.split("");
    }
    getcodigolength()
    {
        return this.separarClave().length;
    }

}
module.exports = codigo;