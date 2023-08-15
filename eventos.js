function mostrarSaludo(){
    alert("Hola!, Bienvenido");
}

const divSaludo = document.querySelector(".boton-container");
divSaludo.addEventListener("click", function(){
    alert("Hola!, Soy el div");
});