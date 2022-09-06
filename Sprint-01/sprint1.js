//Selectores
const  input = document.querySelector("#text-input");
const  btnEncriptar = document.querySelector("#encriptar-btn");
const  btnDesencriptar = document.querySelector("desencriptar-btn");
const  mensaje = document.querySelector("#mensaje");
const  btnCopiar = document.querySelector("#copiar-btn");

//captura el id y esconde el aparece-div de la pantalla (captura el texto escrito en el textarea central)
document.getElementById("aparece-div").style.display = 'none';
inputverificar();

//captura el id al dar click en el boton  y  direcciona el programa para encriptar el texto
document.getElementById('encriptar-btn').onclick = (e) => {
    e.preventDefault();
    const textEncriptado = encriptar(input.value.toLowerCase());
    mensaje.value = textEncriptado;
    input.value = "";
    aparece()
}

//captura el id al dar click en el boton  y  direcciona el programa para desencriptar el texto
document.getElementById('desencriptar-btn').onclick = (e) => {
    e.preventDefault ();
    const textDesencriptado = desencriptar(input.value);
    mensaje.value = textDesencriptado;
    input.value = "";
    aparece()
}

//capturar el id en el momento del click y hace la validacion que copia el texto
document.getElementById('copiar-btn').onclick = (e) => {
    e.preventDefault();
    const mensaje = document.querySelector("#mensaje");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}

//Funcion que encripta el texto
function encriptar(stringEncriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringEncriptada.includes(matrixCode[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return stringEncriptada
}



//Funcion que desencripta el texto 
function desencriptar(stringDesencriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringDesencriptada.includes(matrixCode[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return stringDesencriptada
}

//manipula el DOM para que algunos componentes aparezcan y desaparezcan de la pantalla
function aparece() {
    document.getElementById("desaparece-div").style.display = 'none';
    document.getElementById("aparece-div").style.display = 'block';
}

//manipula el DOM para que algunos componentes aparezcan y desaparezcan de la pantalla
function home() {
    document.getElementById("aparece-div").style.display = 'none';
    document.getElementById("desaparece-div").style.display = 'block';

}

//verifica lo que el usuario digitó
function inputverificar() {
    var inputPalabra = document.querySelector("#text-input");
    inputPalabra.addEventListener("keypress", function (e) {
        var keycode = (e.keycode ? e.keycode : e.which);

        if (keycode > 47 && keycode < 65) {
            e.preventDefault();
        }
    });
}