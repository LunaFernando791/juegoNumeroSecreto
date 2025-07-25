let numeroSecreto = 0; // Número secreto a adivinar
let intentos = 0; // Contador de intentos
let numerosGenerados = []; // Array para almacenar los números generados
const tamanioMaximo = 10; // Rango de juego del número secreto
const intentosMaximos = 6; // Número máximo de intentos permitidos

function asignarTextoElemento(elemento, texto) { // Asigna un texto a un elemento HTML
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() { // Genera un número secreto aleatorio entre 1 y el límite establecido.
    let numeroGenerado = Math.floor(Math.random() * tamanioMaximo) + 1;
    if (numerosGenerados.includes(numeroGenerado)) { // Verifica si el número ya fue generado
        if (numerosGenerados.length === tamanioMaximo) { // Si ya se generaron 10 números, reinicia el array
            numerosGenerados = [];
            return generarNumeroSecreto(); // Llama a la función recursivamente para generar un nuevo número
        } else {
            return generarNumeroSecreto(); // Si ya fue generado, llama a la función recursivamente
        }
    } else {
        numerosGenerados.push(numeroGenerado); // Agrega el número generado al array
        return numeroGenerado; // Retorna el número generado
    }
}

function condicionesIniciales() { // Establece las condiciones iniciales del juego
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${tamanioMaximo} `);
    numeroSecreto = generarNumeroSecreto(); // JUEGO DEL NÚMERO SECRETO
    intentos = 1; // Reinicia el contador de intentos
    document.querySelector('#reiniciar').disabled = true; //Deshabilita el botón de reiniciar
}

function verificarNumero() { // Verifica el número ingresado por el usuario
    const numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) { //Si el usuario acierta
        asignarTextoElemento('h1', '¡Felicidades! ¡Adivinaste!.');
        asignarTextoElemento('p', `El número secreto era ${numeroSecreto}. 
            Lo adivinaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
        document.querySelector('#reiniciar').disabled = false; //Habilita el botón de reiniciar
    } else { //Si el usuario no acierta
        if (intentos >= intentosMaximos) { // Si se alcanzó el número máximo de intentos
            asignarTextoElemento('h1', '¡Juego terminado!');
            asignarTextoElemento('p', `El número secreto era ${numeroSecreto}.`);
            document.querySelector('#reiniciar').disabled = false; // Habilita el botón de reiniciar
            return;
        }
        // Si el usuario no acierta y aún tiene intentos
        asignarTextoElemento('h1', 'Inténtalo de nuevo');
        asignarTextoElemento('p', `El número es ${numeroUsuario > numeroSecreto ? 'menor' : 'mayor'}.`);
        limpiarInput();
        intentos++;
    }
    return;
}

function reiniciarJuego() { // Reinicia el juego
    limpiarInput();
    condicionesIniciales();
    return;
}

function limpiarInput() { // Limpia el input del usuario
    document.getElementById('valorUsuario').value = '';
    document.getElementById('valorUsuario').focus();
    return;
}


condicionesIniciales(); // Inicializa el juego




/* EJERCICIOS DE LA CLASE
function mostrarHolaMundo(){
    console.log("¡Hola, mundo!");
    return;
}

function saludar(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}

function duplicarNumero(numero){
    return numero * 2;
}

function calcularPromedio(a,b,c){
    return (a + b + c) / 3;
}

function encontrarMayor(a,b){
    return a > b ? a : b;
}

function numeroAlCuadrado(numero){
    return numero * numero;
}

function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

function calcularFactorial(numero){
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function convertirDivisaAPesoMexicano($valorEnDolares){
    const tipoDeCambio = 18.5; // Ejemplo de tipo de cambio
    return $valorEnDolares * tipoDeCambio;
}

function calcularAreaYPerimetro(base, altura){
    const area = base * altura;
    const perimetro = 2 * (base + altura);
    document.querySelector("#datosSala").innerHTML(`El área de la sala es de ${area}m2 y su perimetro de ${perimetro}m.`)// Esto se mostraría en pantalla
}

function calcularAreaYPerimetroSalaCircular(radio){
    const area = Math.PI * Math.pow(radio, 2);
    const perimetro = 2 * Math.PI * radio;
    document.querySelector("#datosSala").innerHTML(`El área de la sala circular es de ${area.toFixed(2)}m2 y su perímetro de ${perimetro.toFixed(2)}m.`)// Esto se mostraría en pantalla
}

function tablaDeMultiplicar(numero = 2){
    const limiteTabla = 10;
    let contador =1;
    while (contador <= limiteTabla){
        document.querySelector("#tablaMultiplicar").innerHTML += `${numero} x ${contador} = ${numero * contador}<br>`;
        contador++;
    }
}



let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript", "Python", "C", "C++", "Kotlin"];

lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLang");

function mostrarLenguajes(){
    for(let i=0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}

function mostrarLenguajesInvertidos(){
    for(let i = lenguajesDeProgramacion.length - 1; i >= 0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}

function calcularPromedioEnLista(lista){
    if(lista.length === 0){
        return 0; // Evita división por cero
    }
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma / lista.length;
}

function mayorYMenorEnLista(lista){
    if(lista.length === 0){
        return {mayor: null, menor: null}; // Evita errores si la lista está vacía
    }
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
}

function sumaDeTodosLosElementos(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

function posicionesDeUnElementoEnLista(lista, elemento){
    if(lista.includes(elemento)){
        for (let i= 0 ; i<lista.length; i++){
            if(lista[i] === elemento){
                return i; // Retorna la primera posición del elemento
            }
        }
    }else{
        return -1;
    }
}

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];

function sumaDeElementosDeDosListas(lista1, lista2){
    if(lista1.length !== lista2.length){
        return "Las listas deben tener la misma longitud.";
    }
    let listaNueva = [];
    for (let i = 0; i< lista1.length; i++){
        listaNueva.push(lista1[i] + lista2[i]);
    }
    return listaNueva;
}
sumaDeElementosDeDosListas(lista1, lista2); // Llama a la función para sumar los elementos de las dos listas
console.log(sumaDeElementosDeDosListas(lista1, lista2));

function cuadradoDeElementos(lista){
    let listaAlCuadrado = [];
    for (let i = 0; i < lista.length; i++) {
        listaAlCuadrado.push(lista[i]*lista[i]);
    }
    return listaAlCuadrado;
}


*/