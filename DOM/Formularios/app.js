const formulario = document.querySelector(".form")
const inputNombre = document.querySelector(".inputNombre")
const listaColores = document.querySelector("#color")
const userPage = document.querySelector(".userPage")
const imgEquipo = document.querySelector(".img-equipo")
const textSaludo = document.querySelector(".text-saludo")
const textEquipo = document.querySelector(".text-equipo")

const enviarData = (e) => {
  e.preventDefault() 

  const equipo = document.querySelector('input[name="equipo"]:checked')

  const userInfo = {
    nombre: inputNombre.value,
    color: listaColores.value,
    equipo: equipo ? equipo.value : "ninguno"
  }

  // Cambiar fondo
  document.body.style.background = userInfo.color

  // Mostrar saludo con el nombre
  textSaludo.textContent = `Hola ${userInfo.nombre}`

  // Mostrar el equipo
  textEquipo.textContent = userInfo.equipo

  // Cambiar imagen según equipo
  if(userInfo.equipo === "lobos"){
    imgEquipo.src = "https://cdn.pixabay.com/photo/2023/11/07/12/49/wolves-8372284_1280.jpg"
  } else if(userInfo.equipo === "abejas"){
    imgEquipo.src = "https://cdn.pixabay.com/photo/2023/09/22/00/14/bees-8267791_1280.png"
  } else if(userInfo.equipo === "cisnes"){
    imgEquipo.src = "https://cdn.pixabay.com/photo/2024/03/18/02/40/whooper-swans-8640045_1280.jpg"
  } else {
    imgEquipo.src = ""
  }

  // Mostrar userPage y ocultar formulario
  userPage.style.display = "block"
  formulario.style.display = "none"

  console.log(userInfo)
}

formulario.addEventListener("submit", enviarData)
