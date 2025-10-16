//-------------FUNCION CALLBACK----------------- IMPORTANTE
/** FUNCION
function imprimirNombre(name) {
    console.log(name)
}

console.log(imprimirNombre) //Muestra la definicion de la funcion
console.log(typeof imprimirNombre) //Muestra el tipo de dato: function
console.log(typeof imprimirNombre()) //Muestra el tipo de dato al llamar a la fucncion: undefined - sin valor-.

imprimirNombre('Sofia') // Puedo pasar el valor string de una

let nombre = "Sofia"; // O puedo crear una variable y guardar el valor en la misma
imprimirNombre(nombre)
 */



/* A la funcion se le puden pasar argumentos, y estos son valores. Si puedo pasar valores, puedo pasar valores.
Por lo que tambien puedo pasar funciones, ya que esta es un valor.

Siendo x el parametro (recibo una funcion) y x() la funcion (ejecuto la funcion).


function imprimirNombre(name) {
    console.log(name)
}

function callFunction(x) { //Recibo la funcion en el parametro
    console.log("Iniciando")
    x("Sofia") // Ejecuto funcion
    console.log("Terminando")
}

callFunction(imprimirNombre) // A la funcion de callFunction le paso como parametro la funcion imprimirNombre
*/


/** REEMPLAZO LA X POR CALLBACK --------------
function imprimirNombre(name) {
    console.log(name)
}

function callFunction(callback) { 
    console.log("Iniciando")
    callback("Sofia")
    console.log("Terminando")
}

callFunction(imprimirNombre) 

 */


/** EJ FUNCION SUMAR ---------------------
function sumarCallback(a, b, callback) {
    let resultado = a + b
    callback(resultado)
}

function manejandoSuma(suma) {
    console.log(suma)
}

sumarCallback(1, 2, manejandoSuma) // Paso parametros: a, b y una funcion
 */


/** EJ FUNCION SUMAR, RESTAR CON CALLBACK ----------------
function calc(a, b, operacionCb) {
    console.log("Empezando")
    console.log(operacionCb(a, b))
    console.log("Terminando")
}

function sumar(a, b) {return a + b}
function restar(a, b) {return a - b}

calc(4, 5, sumar)
calc(4, 5, restar)
 */



/* EJERCICIO PRACTICO
Hagan una funcion que reciba nombre, apellido y un callback
Dentro la funcion que acaban de crear, definan una variable nombreCompleto combinando el nombre y el apellido
Pasar nombreCompleto como argumento de la funcion callback que recibieron por parametro en el punto 1.

La funciona callback que pasan a la funcion de orden superior, debe recibir por parametro un nombreCompleto y retornar "Hola " + nombreCompleto
*/ 

function crearNombreCompleto(nombre, apellido, callback) {
    let nombreCompleto = nombre + " " + apellido
    callback(nombreCompleto)
}

function saludar(miNombre) {
    console.log("Hola " + miNombre)
}

crearNombreCompleto("Sofi", "Prodanov", saludar)
