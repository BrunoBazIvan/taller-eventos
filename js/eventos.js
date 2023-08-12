const div = document.getElementById("continer")

div.addEventListener("click", (event) => {
    alert(" Hola!, soy el div")
    event.stopPropagation()
})

