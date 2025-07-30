// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarNombre(){

    let nuevoNombre = document.getElementById("amigo").value

    if(nuevoNombre == ""){
        alert("Por favor, inserte un nombre.")
    }else{
         nombreAmigos.push(nuevoNombre);
         console.log(nombreAmigos);
        limpiarCaja();
    }

}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}