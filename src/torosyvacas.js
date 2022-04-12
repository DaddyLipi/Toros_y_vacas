import codigo from './codigo.js';
function torosYvacas(A,B,intento)
{
    let CodigoSecreto = new codigo(A,intento);
    let Prueba = new codigo(B);
    let VectorResultado = "";
    if(Prueba.getcodigolength()===undefined)
    {
        return 0;
    }
    else
    {
        for(let i=0;i<Prueba.getcodigolength();i++)
        {
            if(CodigoSecreto.separarClave()[i]===Prueba.separarClave()[i])
            {
                VectorResultado=VectorResultado+"!";
            }
            else
            {
                for(let j=0;j<Prueba.getcodigolength();j++)
                {
                    if(CodigoSecreto.separarClave()[i]===Prueba.separarClave()[j])
                    {
                        VectorResultado=VectorResultado+"*";
                    }
                }
            }
        }
    }
    return VectorResultado;
};
function victoria(Resultado)
{
    if(Resultado==="!!!!"){
        return true;
    }
}
export {torosYvacas,victoria};