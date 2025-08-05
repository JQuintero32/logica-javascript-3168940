/*//Condición if 

let nota = 7;
console.log("He realizado mi examen.");

// Condición (si la nota es mayor o igual a 5)
if (nota >= 5) {
  console.log("¡Estoy aprobado!");
}
*/


/*
//Condicional if/else
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

if (nota < 5) {
  // Acción A: nota es menor que 5
  calificacion = "suspendido";
} else {
  // Acción B: Cualquier otro caso diferente a A (nota es mayor o igual que 5)
  calificacion = "aprobado";
}

console.log("Estoy", calificacion);
*/

/*
//Condicional if multiple
let nota = 7;
console.log("He realizado mi examen.");

// Condición
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificación = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);
*/

/*
//Condicional if
let mostrarMensaje = true;

if (mostrarMensaje) {
    alert("Hola Mundo");
}

//negacion en condicional
let es_estudiante = true;
let nueva = !es_estudiante ;

let mostrado = false;

//condicional if else
if (!mostrado) {
    alert("Es la primera vez que se muestra el mensaje");
}

let edad = 18;

if (edad >= 18) {
    alert ("eres mayor de edad");
} else {
    alert ("todavia eres menor de edad");
}

let nombre = "";

if(nombre == "") {
    alert("aun no nos has dicho tu nombre");
} else {
    alert("hemos guardado tu nombre");
}

//condicional else if
if(edad <12) {
alert("todavia eres muy pequeño")
} else if (edad < 19) {
    alert ("eres un adolescente");
} else if (edad < 35) {
    }else {
        alert ("piensa en cuidarte un poco mas");
    }

*/
/*
//switch
let nota ="A"

switch (nota){
  case "A":

  alert("muy bien!") ;
  break;

  case "B":
  alert ("Bien") ;
  break;

  case "C":
  alert ("Mas o menos") ;
  break

  default:
  alert("no se de que decir");
}
*/
/*
//Ejercicio 1
//Datos usuario 
let nombre = prompt ("Ingresa tu nombre")
let edad = prompt ("Ingresa tu edad")

console.log("Has ingresado el nombre:", nombre);
console.log("Has ingresado la edad:", edad);

// Verificamos si puede ingresar a la discoteca
if (edad >= 18) {
  console.log("Puedes ingresar a la discoteca.");
} else {
  console.log("No puedes ingresar a la discoteca.");
}

// Verificamos si puede ingresar a zona VIP
if (nombre === "Mario" || nombre === "Carlos") {
  console.log("Puedes ingresar a la zona VIP.");
}
*/

//Ejercicio 2
// Pedimos los datos al usuario
let estatura = prompt("Ingresa tu estatura en cm:");
let velocidad = prompt("Ingresa tu velocidad en km/h:");
let edad = prompt("Ingresa tu edad:");

console.log("Estatura:", estatura, "cm");
console.log("Velocidad:", velocidad, "km/h");
console.log("Edad:", edad, "años");

// Verificamos si cumple con los requisitos de estatura y velocidad
if (estatura >= 170 && velocidad >= 27) {
  console.log("Puedes ingresar al equipo.");

  // Verificamos en qué división entra
  if (edad < 18) {
    console.log("Vas a las divisiones menores.");
  } else {
    console.log("Vas al equipo profesional.");
  }

} else {
  console.log("No cumples con los requisitos para ingresar al equipo.");
}


