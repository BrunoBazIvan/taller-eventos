const btn = document.getElementById("boton");

btn.addEventListener("click", (event) => {
    alert("Hola!")
    event.stopPropagation()
})