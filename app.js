let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

function asignarTextoElemento(selector, texto) {
    let elementoHTML = document.querySelector(selector);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('.texto__parrafo', `¡Has acertado! en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('.texto__parrafo', 'El número es menor que el indicado.');
        } else {
        asignarTextoElemento('.texto__parrafo', 'El número es mayor que el indicado.');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'El Número Secreto');
    asignarTextoElemento('.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    if (listaDeNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('.texto__parrafo', 'Ya se han sorteado todos los números posibles.');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaDeNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

window.onload = condicionesIniciales;
