// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

//Agregar un amigo a la lista
function agregarAmigo() {

    //Borro el resultado del sorteo anterior en cazo de ya haber jugado
    asignarTextos('resultado', "");

    //Obtengo el nombre para agregar, verifico que no este vació, evito duplicado y lo agrego al array
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

//Evitar nombres repetidos sin importar mayusculas o minusculas
function evitarDuplicados(name) {

    /*  Una forma de hacerlo

    let bandera = 0;
    
    for (let i = 0; i < nombreAmigos.length; i++) {
        if (name === nombreAmigos[i]) {
            bandera = 1;
            break;
            }
            bandera = 0;
            }
            
            return bandera == 1 ? true : false;
            */

    //Una forma mejor. Utilizo la funcion .some que  recorre el array y devuelve true si algún elemento cumple con una condición.
    //.toLowerCase() convierto todos los nombres a minuscula para compararlos como iguales. 
    return nombreAmigos.some(n => n.toLowerCase() === name.toLowerCase());
}

//Realizo el sorteo 
function sortearAmigo() {

    if (nombreAmigos.length == 0) {
        alert("La lista esta vacia. Debes ingresar un nombre");
    } else {

        //Obtengo un número aleatorio 
        let numAleatorio = Math.floor(Math.random() * nombreAmigos.length);

        //Limpio la lista de amigos
        asignarTextos('listaAmigos', '');
        //Muestro el resultado del sortep
        asignarTextos('resultado', `El amigo secreto sorteado es: ${nombreAmigos[numAleatorio]}`);
    }
}

//Limpiar la caja donde agrego los nombres
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

//Para asignar valor a los elementos del html
function asignarTextos(elemento, texto) {
    let lista = document.getElementById(elemento);
    lista.innerHTML = texto;
}

//Imprime la lista de nombres
function imprimirLista() {
    //Se reinicia para no traer los nombres 2 veces en cada actualización
    asignarTextos('listaAmigos', '');

    //Creo un <li> por cada nombre agregado 
    for (let i = 0; i < nombreAmigos.length; i++) {
        listaAmigos.innerHTML += `<li id='${[i]}'> ${nombreAmigos[i]} </li>`;
    }
}


