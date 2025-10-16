// console.log(`Ya empezamos!`);
// console.log('Ya empezamos!');
// console.log("Ya empezamos!");


// const nombre = "Ivan"
// function getNombre() {
//     return "Ivan";
// }

// console.log("Mi nombre es " + nombre + ".");

/**
 * Puedo completar con cualquier expresion. La expresion es algo que retorna un valor (variable, funcion, ect.).
 * Simpre que vean comillas invertidas se conoce como template literal.
 * La sintaxis para ejecutar el codigo es ${}. Lo que esta entre las llaves es el codigo que va a ejecutar y tiene que ser una expresion.
*/

// console.log(`Mi nombre es ${nombre}.`);
// console.log(`Mi nombre es ${getNombre()}`);


//----------------- SCOPE ------------------------
/**
 * Scope es el alcance que tiene una variable. Desde donde yo puedo acceder a una variable dentro del codigo. Puede tener alcance global o local.
 * Si una variable es declarada dentro de una función, solo se conoce dentro de esa función. Su alcance es ese.
 * La funcion como es un tipo de dato, funciona como una variable en este caso.
 * 
 * Scope Global: lo que esta declarado dentro de este podemos acceder desde cualquier punto. 
 * Cada vez que usamos los bloques (ej, funcion), estamos creando un scope.
 * 
 * Scope Local: no se puede llamar fuera de la propia funcion, indicaria que no esta definida
 */


// EJEMPLO 1: puedo acceder dentro de la funcion al scope global, pero desde el scope global no puedo acceder al local
// function getNombre() {
//     // Aca estamos creando un nuevo scope
//     const nombre = "Ivan";
//     console.log(apellido); // Accedo al scope global desde el local (NO SE PUEDE)
// }

// console.log(nombre); // Accedo al scope local desde el global (NO SE PUEDE)
// // Scope global
// const apellido = "Sevilla";
// getNombre();



// EJEMPLO 2:
// const a = 1; // global scope

// function funcion() {
//     const b = 2 // function scope, local scope
//     console.log(a);
//     console.log(b);

//     function funcion2() {
//         const c = 3;
//     }
    
//     console.log(c); // No se puede llamar a funcion2 scope fuera de la propia funcion (no puede accederse desde afuera)
// }

// console.log(b) // No se puede llamar a funcion scope fuera de la funcion (no puede accederse desde afuera)
// console.log(c); // Menos que menos llamarla fuera del bloque de funcion (no puede accederse desde afuera)



// EJEMPLO 3: CON CONDICIONALES
// const a = 1; // global scope

// function funcion() {
//     const b = 2; // function scope
//     console.log(a);
//     console.log(b);

//     if (true) {
//         const b = 5;
//         console.log(b);
//         const c = 3;
//     }
    
//     // Tambien pueden crearse scope de esta forma, solo con llaves
//     {
//         const d = 4;
//     }
    
// }

// funcion();



// ------------- VAR -------------------- 
/**
 * var funciona similar a let PERO,
 * LET es scope de bloque (solo alcance local). No permite redeclarar la variable
 * VAR tiene alcance global. Permite redeclarar la variable
 */

// var a = 1 // lo mismo que decir let a = 1
// console.log(a)

// a = 2
// console.log(a);


// EJEMPLO LET Y VAR
// function main() {
//     {
//         // let a = 1
//         var b = 2
//     }
//     // console.log(a); // no tiene alcance al definirse let (scope de bloque)
//     console.log(b); // tiene alcance global al definirse con var
// }

// main()

// HOISTING - bloque que flota


// REDECLARACION:
// let a = 1 
// let a = 4 // Indica no se puede volver a declarar la variable

// var b = 1
// var b = 4 // Permite redeclarar variable



/**
 * ------------- COERSION DE TIPOS - TYPE COERCION -------------
 * Dos tipos de coercion: explicita e implicita.
 * Tratar de usar siempre coercion explicita
 */

// COERCION EXPLICITA - nosotrs le decimos que haga el cambio
// Pasar de string a number
// const a = "1";
// console.log(typeof a); // string

// const numberA = Number(a); // Otras formas: parseInt(), +a, parseFloat() es para numeros float (con decimal, no redondea sino que saca el decimal)
// console.log(typeof numberA); // number


// Pasar de number a string
// const b = 1;
// console.log(typeof b); // number

// const stringB = String(b); // Otras formas: b.toString() - mas utilizado -.
// console.log(typeof stringB); // string


// Pasar de number a boolean
// const c = 1;
// console.log(typeof c); // number

// const BooleanC = Boolean(c); 
// console.log(typeof BooleanC); // boolean



// COERCION IMPLICITA - JS hace el cambio solo
// SUMA - cuando queremos sumar numeros y string en js, este convierte automaticamente el numero en string
// const a = 1;
// const b = "3";

// console.log(a + b); // resulta en 4
// console.log(String(a) + b); // Es como si JS haga String(a)
// console.log(a + parseInt(b)); // para arreglarlo me adelanto


// RESTA, MULTIPLICACION, DIVISION, CONDICIONALES ----- convierte el string en numero
// const a = 1;
// const b = "3";

// console.log(a - b); 
// if (Boolean(a)) {
// }



/** ------------- IGUALDADES EN JS == vs === -----------------
 * == -> igualdad debil. Se realiza con coercion de tipos implicita hasta llegar a booleano.
 * === -> igualdad estricta (fuerte). Sin coercion de tipos.
 */

// EJEMPLO 1: IGUALDAD DEBIL
// console.log(1 == "1"); // true (convierte el string a number 1)
// console.log(1 == true); // true (convierte el numero a booleano)
// console.log(true == true); // true 

// EJEMPLO 2:
// console.log(0 == false); // true (convierte el cero a boolean)
// console.log(false == false); // true

// EJEMPLO 3:
// console.log("" == false); // true (convierte el string vacio a boolean)

// EJEMPLO 4:
// console.log(0 == ""); // true (convierte el string vacio a boolean)

// EJEMPLO 5:
// console.log(null == undefined); // true - Ambos representan la ausencia de valor

// const x = null
// if (x == null)
// if (x === null && x === undefined) 
// console.log(null == undefined)
// La linea 209 y 210 es exactamente lo mismo


// EJEMPLO 6: IGUALDAD ESTRICTA
// console.log(1 === 1);
// console.log(1 === "1");
// console.log(0 === false);
// console.log(null === undefined);




/** -----------  ARRAYS ----------------
 * Permiten almacenar varios valores en una variable.
 * Se pueden mezclar tipos de datos en arrays
 */

// const number =  [1, 2, 3, 4, 5];
// const letters =  ["a", "b", "c", "d", "e"];
// const fruits =  ["manzana", "banana", "kiwi", "frutilla"];

// //Accedemos a elementos
// console.log(fruits[2])  

// //Modificamos a elementos
// fruits[2] = "pera";
// console.log(fruits[2]);

// //Agregar elementos (se usan metodos)
// fruits.push("kiwi");
// console.log(fruits);

// fruits.push(99);
// console.log(fruits);

// //Contar la cantidad de elementos
// console.log(fruits.length);

// //Ver tipo de elemento, no del array, porque pueden haber distintos elementos
// console.log(typeof fruits[5]);

// //Metodo para ordenar
// fruits.sort();
// console.log(fruits);

// //Podemos utilizar metodos para iterar
// fruits.forEach(); //Solo para iterar



/**  ARRAY DESTRUCTURING 
 * Se extrae y se asigna a la variable en una sola linea.
 * Puedo saltear elementos
 * Se crea con corchetes [] (igual que en python)
*/


// LLAMO INDIVIDUALMENTE
// const fruits =  ["manzana", "banana", "kiwi", "frutilla"];
// const firstFruit =  fruits[0]
// const secondFruit =  fruits[1]
// const thirdFruit =  fruits[2]
// console.log(firstFruit)
// console.log(secondFruit)
// console.log(thirdFruit)

// APLICO ARRAY DESTRUCTURING
// const [primeraFruta, segundaFruta, terceraFruta] = fruits;
// console.log(primeraFruta)
// console.log(segundaFruta)
// console.log(terceraFruta)

// console.log(typeof[]); // object (no es primitivo)


// SALTEO ELEMENTOS
// const [primeraFruta, , terceraFruta] = fruits;
// console.log(primeraFruit)
// console.log(segundaFruit)
// console.log(terceraFruit)



/** ---------------------- OBJETOS -----------------------
 * Es una variable (como la funcion) con clave-valor. Puedo usar const o let.
 * Coleccion de informacion relacionada entre si almacenada en la estructura que tiene clave-valor.
 * Se crea con llaves.
 * Si la clave es un string usar ., si la clave no es un string usar [] para acceder a las propiedades
 * 
 */

const consola = {
    log(message) {
        console.log(message);
    },
};

consola.log("hola")


const persona = {
    name: "Ivan",
    surname: "Servilla",
    age: 26,
    0: 'esto es muy raro',
    address: {
        street: "Falsa",
        number: 123,
    },
    fruitsFavourites: ["manzana", "kiwi"],
    sayHi: function() { //Agregamos metodo
        console.log("Holaa");
    },
    sayGoodbay() {
        console.log("Chauu");
    },
};

console.log(typeof persona); 

// Accedo al objeto entero
console.log(persona); 

// Accedo a una propiedad particular
console.log(persona["name"]); // O tambien como
console.log(persona.name);
console.log(persona.surname);
console.log(persona.age);
console.log(persona[0]); // Los corchetes se suelen usar cuando la clave es un numero (caso raro)
persona.sayHi();
persona.sayGoodbay();
consola.log(persona.address.street);

//Arrays Destructuring
const {name, age: edad} = persona;


