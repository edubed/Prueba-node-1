function sumar (...operandos) {    // para que pueda recibir cualquier cant de parametros
    return operandos.reduce((res,elem)=>{   // utilizo el reduce para que me tomo los "n" parametros
        return Number(res) + Number(elem);   //Number para que me lo convierta en numero
    });
}

/*module.exports = sumar;  // esto me permmite indicarle a node que puedo exportar la funcion sumar, esto seria so tuviera una sola funcion.*/

function restar(...operrandos) {
    return operandos.reduce((res,elem)=>{
    return Number(res) - Number(elem);
});
}

function multiplicar(...operandos) {
    return operandos.reduce((res,elem)=>{
        return Number(res) * Number(elem);
});
}

function dividir(...operandos) {
    return operandos.reduce((res,elem)=>{
        return Number(res) / Number(elem);
});
}

module.exports = {
    "sumar": sumar,
    "restar": restar,
    "multiplicar": multiplicar,
    "dividir": dividir
}// lo declaro como objeto literal para poder tomar los elementos///Agrego aclaraciones//