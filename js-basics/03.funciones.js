/* ---------------FUNCIONES------------------
Las funciones sirven para no repetir codigo. Se utiliza "function".
() donde se define el parametro.
Las funciones no son un tipo de dato primitivo
*/


/* 1. MUESTRA EN CONSOLA: Iniciando suma, Terminamos suma
console.log("Iniciando suma")
2+2
console.log("Terminamos suma:")
*/


/* 2. LO PASAMOS A FUNCION
function suma() {
    console.log("Iniciando suma");
        2+2
    console.log("Terminamos suma:");
}

suma() //Llamamos a la funcion
*/


/** 3. CREO CON LET Y GUARDO EL RESULTADO EN LA VARIABLE
function suma() {
    console.log("Iniciando suma:");
        let resultado = 2 + 2;
    console.log("Terminamos suma:", resultado);
}

suma()
 */


/** 4. REEMPLAZAMOS LOS VALORES POR PARAMETROS, DE MANERA QUE AL LLAMAR A LA FUNCION INGRESEMOS LOS ARGUMENTOS
function suma(a, b) {
    console.log("Iniciando suma:");
        let resultado = a + b;
    console.log("Terminamos suma:", resultado);
}

suma(3, 4) // suma(a, b) Reemplazamos los parametros por argumentos (valores-nros-). Lo hace mas reutilizable
 */


/* 4. PUEDO AGREGAR TANTOS PARAMETROS QUIERA. 
function sumarConMensajesCustomizados(a, b, mensaje1, mensaje2) {
    console.log(mensaje1);
        let resultado = a + b;
    console.log(mensaje2, resultado);
}

sumarConMensajesCustomizados(3, 4, "Sumando ando...", "El resultado es:") // suma(a, b, ...)
sumarConMensajesCustomizados(3, 4) // suma(a, b, ...) Como no completo todos los parametros, mensaje1 y mensaje2 va a figurar en consola como undefined (sin valor definido)
*/


/** 5. INICIALIZAMOS LOS PARAMETROS CON VALORES POR DEFECTO
 function sumar(a = 0, b = 0, mensaje1 = "Iniciando suma...", mensaje2 = "Terminando suma:") {
    console.log(mensaje1);
        let resultado = a + b;
    console.log(mensaje2, resultado);
}

sumar(3, 4)
 */


/** 6. RETURN, CREACION Y REASIGNACION DE UNA VARIABLE
function sumar(a, b) {
        return a + b
}

sumar(5, 6)

let resultado = sumar(9, 9) // Creo y guardo en una variable
resultado =  suma(8, 7) // Reasigno el valor de la variable 
 */




