// function funcion() {
//     //const result =;
//     if (a && b) { // and cortocircuito
//         const result = a + b
//     }
// }

// const user = null; // tambien continua ejecutando si dice por ejemplo const user = {name: "ivan"};
// //console.log(user.name); // esta mal
// user && user.name && console.log(user.name); // esta ok, ejecuta la ultima parte de la expresion



// --------------------- OPERADOR OR ---------------------
// const user = {
//     name: "ivan",
//     age: 26,
//     profilePicture: undefined,
// };

// const url = user.profilePicture || user.name[0].toUpperCase(); // Muy utlizada para chequear valores antes de acceder a ellos o determinar valores por defecto
// console.log(url);

// //MAS EJEMPLOS DE AND
// console.log(false && "hello"); // false (retorna primera valor false)
// console.log(false && "hello"); // "hello" (si todo da verdadero, retorna el utlimo valor)
// console.log("" && 10); // ""
// console.log(0 && 10); // 0
// console.log([] && {} && "" && 0 && 15); // 0

// MAS EJEMPLOS DE OR
// console.log(false || "hello"); //hello > al primer valor verdadero retorna ese valor
// console.log(null || "ivan" || undefined); //undefined > si todos los valores son false retorna el ultimo valor

 
// --------------------- NULLISH COALESCING - ?? ---------------------
/** Son valores null y undefined, ademas de ser valores falsy.
 */

// const config = {
//     timeout: 0,
//     debug: null
// }

// //const timeout1 = config.timeout || 5000 //5000 es el valor por milisegundo predeterminado en js - Si no esta definido la propiedad de timeout, queda definido en 5 segundos.
// //Lo anterior es lo mismo que utilizar nullish:
// const timeout1 = config.timeout ?? 5000; //Es igual que or, pero solo continua si el operando es un valor nullish
// console.log(timeout1); //console.log(0 || 5000);



// const config = {
//     debug: false,  
// };

// const debug = config.debug || true; 
// console.log(debug); // true


/** El || devuelve la primer expresion verdadera
 * El && devuelve la primer expresion falsy
*/



//--------------------- OPTIONAL CHAINING ---------------------
// const user = null;

// //Para acceder a user.name
// user.profile.profilePictur; //da error porque es null
// user && user.name && console.log(user.name); // o tambien se lo puede guardar como lo siguiente
// // const name = user && user.name; // esto rompe
// const name = user?.name; // entonces se lo hace as



//--------------------- METODOS ARRAYS ---------------------
/** Se pueden combinar metodos arrays
 * METODO FOREACH: recorre, no retorna nada.
 * METODO MAP: retorta un nuevo array, transformando el array original.
 * METODO FILTER: retorna un nuevo array, con los valores verdaderos.
 * METODO FIND: retorna el primer elemento (no array, sino objeto) que cumpla la condicion.
 * METODO SOME: retorna un booleano. Al menos un elemento tiene que cumplir con la condicion.
 * METODO EVERY: es como some, pero todos los elementos tienen que cumplir la condicion.
*/


const numbers = [1, 2, 3, 4, 5];

//---------------METODO FOREACH---------------
//Funcion normal
// function recorrer(item) { //sirve como funcion normal, si lo declaro con const y tambien como array
//     console.log(item);
// };

// numbers.forEach(recorrer)


// //Si lo declaro con const
// const recorrer = function (item) { 
//     console.log(item);
// };

// numbers.forEach(recorrer)


// //tambien como array
// const recorrer = (item) => { 
//     console.log(item);
// };

// numbers.forEach(recorrer) // que es lo mismo que lo de abajo


// const recorrer = (item) => { 
//     console.log(item);
// };

// numbers.forEach((item) => {
//     console.log(item);
// });




//--------------- METODO MAP ---------------
// const recorrer = (item) => { 
//     console.log(item);
//     return item
// };

// const nuevoArray = numbers.map(recorrer);
// console.log(nuevoArray === numbers) // false porque son arrays diferentes


// const recorrer = (item) => { 
//     return "Sofias"
// };

// const nuevoArray = numbers.map(recorrer);
// console.log(nuevoArray) // [ 'Sofias', 'Sofias', 'Sofias', 'Sofias', 'Sofias' ]


// const recorrer = (item) => { 
//     return item*2
// };

// const nuevoArray = numbers.map(recorrer);
// console.log(nuevoArray) // [ 2, 4, 6, 8, 10 ]


// const recorrer = (item) => { 
//     return item*2
// };

// const nuevoArray = numbers.map(recorrer);
// console.log(nuevoArray) // [ 2, 4, 6, 8, 10 ]



// const alumnas = [
//     {name: "Alicia", age: 24},
//     {name: "Cintia", age: 40},
//     {name: "Barbara", age: 14},
// ]

// const nombreDeAlumnas = alumnas.map((item) => item.name);
// console.log(nombreDeAlumnas) // [ 'Alicia', 'Cintia', 'Barbara' ]



//--------------- METODO FILTER ---------------
const alumnas = [
    {name: "Alicia", age: 24},
    {name: "Cintia", age: 40},
    {name: "Barbara", age: 14},
]

// const alumnasMayoresDeEdad = alumnas.filter(item => {
//     return item.age >= 18;
// })
// console.log(alumnasMayoresDeEdad) // [ { name: 'Alicia', age: 24 }, { name: 'Cintia', age: 40 } ]

// Si quiere mostrar solo el nombre
// const alumnasMayoresDeEdad = alumnas.filter((item) => {
//     return item.age >= 18;
// }).map((item) => item.name);
// console.log(alumnasMayoresDeEdad) // [ 'Alicia', 'Cintia' ]


//Con salto de linea
// const alumnasMayoresDeEdad = alumnas.filter((item) => {
//     return item.age >= 18;
// }).map((item) => item.name).forEach((item) => console.log(item));  // Alicia \n Cintia




//--------------- METODO FIND ---------------
// const alumnasMayoresDeEdad = alumnas.find((item) => {
//     return item.age >= 18;
// });
// console.log(alumnasMayoresDeEdad); // { name: 'Alicia', age: 24 }



//--------------- METODO SOME ---------------
// const alumnasMayoresDeEdad = alumnas.some((item) => {
//     return item.age >= 18;
// });
// console.log(alumnasMayoresDeEdad); // true


//--------------- METODO EVERY ---------------
// const alumnasMayoresDeEdad = alumnas.some((item) => {
//     return item.age >= 18;
// });
// console.log(alumnasMayoresDeEdad); // true


//MAS EJEMPLOS CON METODO FILTER
const numeros = [1, 5, 432, 123, 54, 12, 65, 564, 23]

const pares = numeros.filter(item => {
    return item % 2 === 0;
});

console.log(pares.length);