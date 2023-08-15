function mostrarSaludo(){
    alert("Hola!, Bienvenido");
}

const botonSaludo = document.getElementById("saludarBtn");
botonSaludo.addEventListener("click", function(event){
    event.stopPropagation();
    mostrarSaludo();
});

const divSaludo = document.querySelector(".boton-container");
divSaludo.addEventListener("click", function(){
    alert("Hola!, Soy el div");
});