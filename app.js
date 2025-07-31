// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigo(){

   nuevoNombre = document.getElementById("amigo").value;

    if(nuevoNombre === ""){
        alert("Por favor, inserte un nombre.");
        limpiarCaja();
    }else if(evitarDuplicados(nuevoNombre) === false){
        alert(`El nombre ${nuevoNombre} ya existe en la lista`)
        limpiarCaja();
    }else{
        nombreAmigos.push(nuevoNombre);
         console.log(nombreAmigos);
         limpiarCaja();
    }
    imprimirLista();
}


function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function asignarTextos(elemento, texto) {
    let lista = document.getElementById(elemento);
    lista.innerHTML = texto;
}

function imprimirLista(){
        asignarTextos('listaAmigos','');

        for (let i = 0; i < nombreAmigos.length; i++) {
          listaAmigos.innerHTML += `<li id='${[i]}'> ${nombreAmigos[i]} </li>`;
         }
}

function evitarDuplicados(name){

    for(let i = 0; i< nombreAmigos.length; i++){
        if(name === nombreAmigos[i]){
           return false;
        }
        return true;
    }
}
