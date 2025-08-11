// // WHILE con incremento
// let i = 0;  // Inicialización de la variable contador

// // Mientras i sea menor que 5, repite
// while (i < 5) {
//   console.log("Valor de i:", i);
//   i = i + 1; // Incremento
// }

// //WHILE que no se ejecuta (condición falsa desde el inicio)
// i = 5;
// while (i < 5) {
//   console.log("Hola a todos");
//   i = i + 1;
// }
// console.log("Bucle finalizado");

// //DO...WHILE (se ejecuta al menos una vez)
// i = 5;
// do {
//   console.log("Hola a todos");
//   i = i + 1;
// } while (i < 5);
// console.log("Bucle finalizado");

// //FOR con incremento
// for (let i = 0; i < 5; i++) {
//   console.log("Valor de i:", i);
// }

// //WHILE equivalente al FOR anterior
// i = 0;
// while (i < 5) {
//   console.log("Valor de i:", i);
//   i++;
// }

// //FOR con decremento
// for (let i = 5; i > 0; i--) {
//   console.log("Valor de i:", i);
// }

// //FOR con dos variables (incremento y decremento)
// for (let i = 0, j = 5; i < 5; i++, j--) {
//   console.log("Valor de i y j:", i, j);
// }

// //WHILE con dos variables
// i = 0;
// let j = 5;
// while (i < 5) {
//   console.log("Valor de i: ", i);
//   console.log("Valor de j: ", j);
//   i++;
//   j--;
// }

// //WHILE que concatena texto
// let texto = "";
// i = 0;
// while (i <= 10) {
//     texto += "<br>El número es " + i;
//     i++;
// }
// console.log(texto); // Mostramos en consola

// //DO...WHILE corregido
// texto = "";
// i = 0;
// do {
//     texto += "El número es: " + i + "\n";
//     i++;
// } while (i < 10);
// console.log(texto);

// //FOR recorriendo un array
// let carros = ["BMW", "VOLVO", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for (i = 0; i < carros.length; i++) {
//    text += carros[i] + "<br>";
// }
// console.log(text); // Mostramos en consola

// //Ejercicios

// //1

// let numero = prompt("Ingresa un número:");
// let i = 1;

// while (i <= numero) {
//     console.log("Número:", i);
//     i++;
// }


// //2 

// let limite = prompt("Ingresa un número:");
// let i = 1;

// while (i <= limite) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
//     i++;
// }


// //3

// let num = prompt("Ingresa un número:");
// let j = 1;

// do {
//     console.log("Número:", j);
//     j++;
// } while (j <= num);


// //4

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }


// //5

// let inicio = prompt("Ingresa el inicio del rango a excluir:");
// let fin = prompt("Ingresa el fin del rango a excluir:");

// for (let i = 1; i <= 100; i++) {
//     if (i < inicio || i > fin) {
//         console.log(i);
//     }
// }