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
        if(this.Clave===undefined)
        {
            return 0;
        }
        else
        {
            return this.Clave.split("");
        }
    }
    getcodigolength()
    {
        return this.separarClave().length;
    }
    getbufalos()     
    {         
        let VectorBufalos = "";         
        for(let i=0;i<this.getcodigolength();i++)         
        {             
            VectorBufalos=VectorBufalos+"%";         
        }         return VectorBufalos;     
    }
}
module.exports = codigo;