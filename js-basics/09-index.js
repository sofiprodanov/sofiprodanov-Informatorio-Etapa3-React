// console.log("Hello");
// alert("holaaaaa");

/** alert("holaaaaa") es lo mismo que window.alert("holaaaaa").
 * Lo que hace es desplegar una ventana emergente en la web.
 * Alert es una funcion predeterminada en window. Es del global (window) -console.log(window); -
 * 
*/


// const alert = "holaaaaa";
// window.alert(alert);



// window.miVariableGlobal = "holaaaaa";
// console.log(window);



// window.app = {
//     $: console.log("Saludar"),
// };

// app.$;



/** ------------ DOCUMENT OBJET MODEL(DOC) ------------ 
 * Es la api del documento html (del navegador/windows).
 * Es una representación en forma de árbol (objeto) de todo el contenido de una página web (index.html).
 * 
 */

// window.document; // se puede acceder directamente como document
// document;


//------------- ACCEDEMOS A ELEMENTOS DEL INDEX.HTML ----------------
//queryselector > recibe un selector css y trae la primera coincidencia que exista
const titulo = document.querySelector("#titulo") // al html puedo agregarle un id para que sea mas especifico
titulo.style.color = "red";
titulo.style.fontSize = "44px";
titulo.textContent = "Estoe sta tremendo. estoy cambiando una web con JS";
console.log(titulo);




// const titulo = document.querySelector("titulo") // al html puedo agregarle un id para que sea mas especifico
// console.log(titulo);



