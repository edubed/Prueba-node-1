// Pasos:
// Creamos las operaciones basicas : Suma, resta, multiplicacion y division
// Tomar los operandos y la operación desde los argumentos de la terminal
// a lo que yo quiero llegar es node app.js [operacion] [operandos]
const process = require("process");
/*console.log(process.argv); // me trae todo lo que ponga en la terminal
console.log(operacion,opA,opB);*/

const[, , operacion, ...operandos] = process.argv; // le agrego el "..." p/ que tome los "n" datos que ingrese

const calculadora = (require("./calculadora"));// llamo al otro archivo. Lo guardo en una constante y en el switch lo uso

switch (operacion) {
    case "sumar": {
         let resultado = calculadora.sumar(...operandos);
    console.log(resultado);
        }
    break;
    case "restar": {
        let resultado = calculadora.restar(...operandos);
    console.log(resultado);}
    break;
    case "multiplicar": {
        let resultado = calculadora.multiplicar(...operandos);
   console.log(resultado);}
    break;
    case "dividir": {
    let resultado = calculadora.dividir(...operandos);
    console.log(resultado);}
    break;
    default:
        console.log('No reconozco la operacion')
}


/////////// Segunda parte, JSON////
//Guarda en un string que va representar la operacion
// Guardar en un formato JSON
// leer el archivo
// convertir los contenidos de JSON a array
//Guardar el log nuevo
// Convertir el array a JSON
// escribir el archivo.

