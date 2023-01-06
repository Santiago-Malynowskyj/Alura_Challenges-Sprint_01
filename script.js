function validarInput() {
  let textArea = document.querySelector(".textInput").value;
  if (!textArea) return alert("Debes colocar un texto!");
  if (/[^a-z !]/.test(textArea))
    return alert(`Solo se admiten letras en minúscula y espacios`);
}

function encriptarTexto() {
  validarInput();
  let textArea = document.querySelector(".textInput").value;
  let textoResultado = document.querySelector(".texto-resultado");

  let textoEncriptado = "";
  let array = [];
  for (i = 0; i < textArea.length; i++) {
    array[i] = textArea[i];
  }
  for (let element in array) {
    switch (array[element]) {
      case "a":
        textoEncriptado += array[element].replace("a", "ai");
        break;
      case "e":
        textoEncriptado += array[element].replace("e", "enter");
        break;
      case "i":
        textoEncriptado += array[element].replace("i", "imes");
        break;
      case "o":
        textoEncriptado += array[element].replace("o", "ober");
        break;
      case "u":
        textoEncriptado += array[element].replace("u", "ufat");
        break;
      default:
        textoEncriptado += array[element];
    }
  }
  cambioLateral();
  let mensaje = `Su texto encriptado es:`;
  Jquery(textoEncriptado, mensaje);

  textoResultado.innerHTML = textoEncriptado;
}
function desencriptarTexto() {
  validarInput();
  let textArea = document.querySelector(".textInput").value;
  let textoResultado = document.querySelector(".texto-resultado");

  textArea = textArea
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  cambioLateral();
  let mensaje = `Su texto desencriptado es:`;
  Jquery(textArea, mensaje);
  textoResultado.innerHTML = textArea;
}

function cambioLateral() {
  let mostrarDefault = document.querySelector(".mostrarDefault");
  let mostrarOculto = document.querySelector(".mostrarOculto");

  mostrarDefault.classList.add("esconder_div");
  mostrarOculto.classList.remove("esconder_div");
}
function cambioLateralInverso() {
  let mostrarDefault = document.querySelector(".mostrarDefault");
  let mostrarOculto = document.querySelector(".mostrarOculto");

  mostrarOculto.classList.add("esconder_div");
  mostrarDefault.classList.remove("esconder_div");
}

function copiarTexto() {
  document.querySelector(".textInput").value = "";
  const clipboard = document.querySelector(".texto-resultado").innerHTML;
  navigator.clipboard.writeText(clipboard);
  let mensajeDeCopia = document.querySelector(".texto-resultado");
  mensajeDeCopia.innerHTML =
    "Su texto ha sido copiado &#9989 </br> Aguarde un instante";
  setTimeout(cambioLateralInverso, 2000);
}
var mediaqueryList = window.matchMedia("(max-width: 850px)");
mediaqueryList.addListener(function (EventoMediaQueryList) {
  console.log(mediaqueryList, EventoMediaQueryList);
});

function limpiarTextInput() {
  document.querySelector(".textInput").value = "";
}

function Jquery(texto, mensaje) {
  if (mediaqueryList.matches === true) {
    let textArea = document.querySelector(".textInput");
    textArea.value = `${mensaje} 
    ${texto}
    `;

    let btn_limpiar = document.querySelector(".btn_limpiar");
    let btn_copiar_movil = document.querySelector(".btn_copiar_movil");

    btn_copiar_movil.classList.remove("esconder_div");
    btn_limpiar.classList.remove("esconder_div");
  }
}
