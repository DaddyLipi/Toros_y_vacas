import codigo from './codigo.js';
function torosYvacas(A,B,intento)
{
    let CodigoSecreto = new codigo(A,intento);
    let Prueba = new codigo(B);
    let VectorResultado = "";
    if(CodigoSecreto.getcodigolength()===undefined)
    {
        return 0;
    }
    else
    {
        for(let i=0;i<CodigoSecreto.getcodigolength();i++)
        {
            if(CodigoSecreto.separarClave()[i]===Prueba.separarClave()[i])
            {
                VectorResultado=VectorResultado+"!";
            }
        }
    }
    return VectorResultado;
};
export default torosYvacas;