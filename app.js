// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo (){
    let nombre= document.getElementById ("amigo").value;
       
    console.log (nombre);
    if (nombre === ""){
        alert ("Ingresa un nombre por favor!");
        return;

    }
     amigos.push (nombre);
        console.log (amigos);

        enlistarAmigos(); 
    
        limpiarCaja();
 

    }
 
function limpiarCaja (){
    let valorCaja= document.getElementById ('amigo').value= ''; 
}

function enlistarAmigos (){
   let lista= document.querySelector('#listaAmigos'); 
    lista.innerHTML ="";
    
    for (let i=0; i < amigos.length; i++){
        let listado = document.createElement ("li");
            listado.textContent = amigos[i];
            lista.appendChild (listado);  
    }
}

function sortearAmigo (){
    let sortear= document.getElementById ("sorteo");
        if (amigos.length == ""){
          alert ('Error! No hay nombres para sortear');
           return;
        }
    let nombreAleatorio= amigos[Math.floor (Math.random ()* amigos.length)];
    let resultado= document.querySelector ('#resultado');
    resultado.innerHTML =(`El amigo Secreto es: ${nombreAleatorio}`);

    let limpiarLista= document.getElementById ('listaAmigos');
    limpiarLista.innerHTML= " ";
     
}
