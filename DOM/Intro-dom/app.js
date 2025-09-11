
// Seleccionar los elementos con los que va a interactua o los que responden a la interacción


const pantalla = document.querySelector (".pantalla")
const btnMenos = document.querySelector (".btn-menos")
const btnMas = document.querySelector (".btn-mas")


// 2. Crear la FUNCIÓN
let counter = 0


function incrementar () {
   counter++
   pantalla.textContent = counter


   if (counter >= 10){
       pantalla.style.color = "red"
   }


       if (counter >= 30) {
       document.body.style.backgroundColor = "gray"
   }
}




function decrementar () {
   if (counter > 0) {
   counter--
   pantalla.textContent = counter


   if (counter < 10){
       pantalla.style.color = "black"
   }


       if (counter < 30) {
       document.body.style.backgroundColor = "white"
   }
   }
}



// 3. Crear el evento


btnMas.addEventListener("click", incrementar) /*Aquí ponemos las funciones que queremos que haga, dará click y va a empezar a incrementar*/
btnMenos.addEventListener("click", decrementar) /*Aquí ponemos las funciones que queremos que haga, dará click y va a empezar a incrementar*/