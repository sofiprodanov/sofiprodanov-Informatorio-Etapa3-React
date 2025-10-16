// const array = [1, 2, 3, 4];
// array = ["uno", "dos"]; // Esto es una reasignacion, esto no puedo hacer ya que es una variable constante.
// array.push(5); // En este caso lo que hacemos es modificar el contenido del array.
// console.log(array);
// console.log(typeof array);

// const persona = {name: "Ivan"};
// persona.surname = "Sevilla";
// console.log(persona);
// console.log(typeof persona);

// function saludar() {
//     return "hola";
// }

// console.log(typeof saludar);


/** Todo lo que el typeof de como resultado objetc no es un dato primitivo
 * Los valores que no puedo cambiar son los primitivos.
 * Los tipos de datos que el typeof de como resultado object se pueden modificar el contenido, agregando propiedades, editando propiedades, etc. Esto es por la diferencia entre referencia y valor
 * 
 * */



// REFERENCIA VS VALOR
/** Como js guarda los datos en variables y constantes. Bloques de memoria.
 * Tipos de datos por valor > datos primitivos
 * Tipos de datos por referencia > objets, array, funciones, etc (el resto)
 * 
 */


//EJEMPLO TIPO DE DATO POR VALOR
// const nombre = "Ivan"; // Ivan  
// const edad = 26; // 26  
// const apellido = nombre; // Ivan
// const mascotas = edad; // 26
// edad = edad + 1; // 27 (solo se modifica la variable edad, no mascostas porque este copia el valor de edad)
// //Aca luego de edad +1, edad queda con valor 27 y mascotas con valor 26 (variables no apuntan a otras variables, solo a valores)

// //EJEMPLO TIPO DE DATOS POR REFERENCIA
// // En este caso el valor lo que hace es una referencia a la direccion (ubicacion) en memoria donde vive ese valor (donde se encuentra).
// const numeros = [1, 2]; // la variable es 

// const a = {};
// const b = {};
// console.log(a === b); // false > esta señalando un lugar distinto en la memoria
// // Cada vez que usamos corchetes creamos nuevos valores

// const a = [];
// const b = a;
// console.log(a === b); // true, ya que B apunta a A


// function addElement(array, element) {
//     array.push(element);
// }

// const numbers = [1, 2, 3];
// addElement(numbers, 4);
// console.log(numbers); // [1, 2, 3, 4]


// function addElement(x) {
//     x = 90
// }

// const numero = 1;
// addElement(numero);
// console.log(numero); // 1


// const age = 18
// if (age >= 16) {
//     console.log("Podes votar");
// }



//OPERADOR LOGICO &&
// const temperatura = 27
// if (temperatura > 40) {
//     console.log("Que calor, no aguanto mas");
// } else if (temperatura > 20 && temperatura < 30) {
//     console.log("Que lindo dia");
// } else if (temperatura > 20) {
//     console.log("Uff");
// } else {
//     console.log("Tengo mucho frio");
// }


//OPERADOR LOGICO !
// const isLoggedIn = false;

// if (!isLoggedIn) { //isLoggedIn === false
//     console.log("Tenes que hacer login");
// } 



// OPERADOR TERNARIO
// const edad = 26

// const mensaje = edad >= 16 ? "Podes votar" : "No podes votar";
// console.log(mensaje);


// const temperatura = 27;
// // let tiempo;
// // if (temperatura > 27) {
// //     tiempo = "Muchisimo calor";
// // } else {
// //     tiempo = "Ideal";
// // }



// // Otra forma
// let tiempo = temperatura > 27 ? "Muchisimo calor" : "Ideal"



// //Template literal + op ternario
// console.log(
//     `La temperatura es ${temperatura > 27 ? "Muchisimo calor" : "Ideal"}`,
// )



// //Dias de la semana
// const dia = "Jueves"

// switch (dia) {
//     case "Lunes":
//         console.log("😖");
//         break;
//     case "Miercoles":
//         console.log("Otro dia mas");
//         break;
//     case "Jueves":
//         console.log("😪");
//         break;
//     default:
//         console.log("Dia aburrido");
// }



//Dias de la semana p2: fall through
const dia = "Jueves"

switch (dia) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Domingo": {
        const emoji = "😖";
        console.log(emoji);
    }
    case "Viernes":
    case "Sabado": {
        const emoji = "";
        console.log("🤘");
        break;
    }
    default:
        console.log("Que dia mas raro(?");
}



// For loops: inicializo, condicion, ejecucion (generico)
// const frutas = ["manzana", "banana", "pera"];
// for (let i = 0; i < frutas.length; i++) {
//     if (frutas[i] === "banana") {
//         break;
//     }
//     console.log(frutas[i]);
// }

//Recorrer arrays: for of
for(const fruta of frutas) { 
    console.log(fruta);
}

//Recorrer objetos: for in
const persona = {
    name: "Ivan",
    edad: 26,
};

for (const key in persona) {
    console.log(`${key}: ${persona[key]}`);
}

//WHILE - EJECUTO Y EVALUO
// let i = 0
// while(i < 5) {
//     console.log('Cuenta = ${i}');
//     i = i + 1
// } 


//DO WHILE - EJECUTO Y DESPUES EVALUO
do {
    console.log('Cuenta = ${i}');
    i = i + 1
} while (i < 5)