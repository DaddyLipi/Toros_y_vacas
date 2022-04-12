import codigo from './codigo.js';
function torosYvacas(A,B,intento)
{
    let CodigoSecreto = new codigo(A,intento);
    if(CodigoSecreto.getcodigolength()===undefined)
    {
        return 0;
    }
};
export default torosYvacas;