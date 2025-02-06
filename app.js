// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo() {
    let persona= document.getElementById('amigo').value;
    if (persona.length < 1) {
        alert('Debe ingresar un nombre');
        return;
    }else{
        amigos.push(persona);
        console.log(persona);
        console.log(amigos);
        limpiarCampo();
        actualizarLista();
        return;
    }
}

function limpiarCampo() {
    document.getElementById('amigo').value='';
    return;
    
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    if(amigos.length <1){
        alert('No hay amigos para sortear');
        return;
    }else {
        if(amigos.length <= 3){
        alert('No hay suficientes amigos para sortear');
        return;
        }else{
            let ganador = Math.floor(Math.random() * amigos.length);

             // Obtener el elemento <ul> con el id "resultado"
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = ""; // Limpiar cualquier contenido anterior en el resultado

            // Crear un nuevo elemento <li> para mostrar el ganador
            let li = document.createElement('li');
            li.textContent = 'El ganador es: ' + amigos[ganador];

            // Agregar el ganador a la lista de resultados
            resultado.appendChild(li);

            return;
            }
        }
}

console.log(typeof (amigos));