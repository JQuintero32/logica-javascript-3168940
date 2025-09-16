//captura variables
const titulo = document.querySelector(".titulo")
const screen = document.querySelector(".screen")
const miniatura = document.querySelector(".container-min")

console.log(titulo)
console.log(screen)
console.log(miniatura)

//función

function cambiarImg (event) {
if(!event.target.src) return
titulo.textContent = event.target.name
screen.src = event.target.src
}

miniatura.addEventListener("click" , cambiarImg)