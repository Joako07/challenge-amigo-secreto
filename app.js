// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigo() {

    asignarTextos('resultado', "");
    nuevoNombre = document.getElementById("amigo").value;

    if (nuevoNombre === "") {
        alert("Por favor, inserte un nombre.");
        limpiarCaja();
    } else if (evitarDuplicados(nuevoNombre) === true) {
        alert(`El nombre ${nuevoNombre} ya existe en la lista`)
        limpiarCaja();
    } else {
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

function imprimirLista() {
    asignarTextos('listaAmigos', '');

    for (let i = 0; i < nombreAmigos.length; i++) {
        listaAmigos.innerHTML += `<li id='${[i]}'> ${nombreAmigos[i]} </li>`;
    }
}

function evitarDuplicados(name) {

  /*  let bandera = 0;

    for (let i = 0; i < nombreAmigos.length; i++) {
        if (name === nombreAmigos[i]) {
            bandera = 1;
            break;
        }
        bandera = 0;
    }

    return bandera == 1 ? true : false;

       for (let i = 0; i < nombreAmigos.length; i++) {
        if (name.toLowerCase() === nombreAmigos[i].toLowerCase()) {
            return true;
        }
    }
    return false;
*/
    return nombreAmigos.some(n => n.toLowerCase() === name.toLowerCase());
}


function sortearAmigo() {

    if (nombreAmigos.length == 0) {
        alert("La lista esta vacia. Debes ingresar un nombre");
    } else {

        let numAleatorio = Math.floor(Math.random() * nombreAmigos.length);

        asignarTextos('listaAmigos', '');
        asignarTextos('resultado', `El amigo secreto sorteado es: ${nombreAmigos[numAleatorio]}`);
    }


}
