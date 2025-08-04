let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroMaximo)
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Has acertado! en ${intentos} ${intentos === 1 ? 'vez': 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor que el indicado.');
        } else {
            asignarTextoElemento('p','El número es mayor que el indicado.');
        }
        intentos++;
        limppiarCaja();
    }
    return;
}
function limppiarCaja() {
document.querySelector('#valorUsuario').value = '';

}

function condicionesIniciales() {
    asignarTextoElemento('h1','El Numero Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si ya sorteamos todos los números
    if (listaDeNumerosSordeados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se han sorteados todos los números posibles.');
        // deshabilitar el boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
        return; // No se puede generar un nuevo número
    
    }else {

    }
    // Verificar si el número ya ha sido sorteado
    if (listaNumerosSordeados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); // Si ya fue sorteado, generar otro
    } else {
        listaDeNumerosSorteados.push(numeroGenerado); // Agregar el número a la lista
        return numeroGenerado; // Retornar el número nuevo
    }
}


function reiniciarJuego() {
    //Limpiar la caja de texto
    limppiarCaja();
    // indicar mensaje de intervalo de números
    //generar un nuevo número secreto
    //iniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
