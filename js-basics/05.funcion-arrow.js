//------------ARROW FUNCTIONS (funciones flecha)--------------
/**
 Las arrow function tienen que ver con que vale this en un contexto determinado
 En ciertos contextos, this no vale lo que queremos que valga en ese momento, por lo que aplicamos en concepto de binding para que this valga lo que yo quiero que valga en ese momento determinado.
 
 Es lo mismo de funciones que vimos anteriormente, solo cambia la SINTAXIS.
 */


/** FUNCION ANONIMA
const funcion = function() {
    console.log("Hola")
}
 */


/** GUARDO LA FUNCION FUNCTION EN LA VARIABLE FUNCION
const funcion = function() {
    console.log("Hola")
}
 */


/** SUMA
const sumar = (a, b) => {
    return a + b
}

sumar(1, 4)
 */


/** COSAS QUE PUEDO HACER CON ARROW FUNCTION
 Si solo uso un parametro, no es necesario que use los parentesis. 
 Si o si uso parentesis, si son 2 parametros o ningun parametro.
 
const imprimir = texto => {
    console.log(text)
}

 */


/** OPCION 1 Y 2 ES LO MISMO
 OP1:
 const sumar = (a, b) => {
    return a + b
}

sumar(5, 4)


 OP2:
 const sumar = (a, b) => a + b

 sumar(5, 5)
 */

