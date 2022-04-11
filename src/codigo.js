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
        this.Prueba=this.intento;
    }
    getPrueba()
    {
        return this.Prueba;
    }
}
module.exports = codigo;