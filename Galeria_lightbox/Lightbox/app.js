// Captura de variables
const flotante  = document.querySelector("#flotante")
const cuadro    = document.querySelector("#cuadro")
const equis     = document.querySelector("#equis")
const sig       = document.querySelector("#sig")
const ant       = document.querySelector("#ant")
const imgprincipal = document.querySelector("#imgprincipal")
const fath      = document.querySelector("#fath")
const minis     = fath.querySelectorAll(".min")

let indiceActual = 0

// Funciones
function mostrarLightbox(event, index) {
  indiceActual = index
  imgprincipal.src = event.target.src
  flotante.style.top = "0"
}

function OcultarLightbox() {
  flotante.style.top = "-100vh"
}

function siguiente() {
  indiceActual++
  if (indiceActual >= minis.length) {
    indiceActual = 0
  }
  imgprincipal.src = minis[indiceActual].src
}

function anterior() {
  indiceActual--
  if (indiceActual < 0) {
    indiceActual = minis.length - 1
  }
  imgprincipal.src = minis[indiceActual].src
}

// Eventos
minis.forEach((mini, index) => {
  mini.addEventListener("click", (e) => mostrarLightbox(e, index))
})

equis.addEventListener("click", OcultarLightbox)
cuadro.addEventListener("click", OcultarLightbox)
sig.addEventListener("click", siguiente)
ant.addEventListener("click", anterior)

