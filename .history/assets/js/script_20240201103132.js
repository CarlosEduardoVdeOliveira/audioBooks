const capitulo = document.querySelector("#capitulo");
const audioCapitulo = document.querySelector("#audio-capitulo");
const botaoPlayPause = document.querySelector("#play-pause");
const botaoAnterior = document.querySelector("#anterior");
const botaoProximo = document.querySelector("#proximo");
const numerocapitulos = 10;

function tocarFaixa() {
  audioCapitulo.play()
  botaoPlayPause.classList.remove("bi-play-circle-fill")
  botaoPlayPause.classList.add("bi-pause-circle-fill")
}

botaoPlayPause.addEventListener('click', tocarFaixa)