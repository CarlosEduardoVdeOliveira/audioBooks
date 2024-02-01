const capitulo = document.querySelector("#capitulo");
const audioCapitulo = document.querySelector("#audio-capitulo");
const botaoPlayPause = document.querySelector("#play-pause");
const botaoAnterior = document.querySelector("#anterior");
const botaoProximo = document.querySelector("#proximo");
const numerocapitulos = 10;
let taTocando = 0;

function tocarFaixa() {
  audioCapitulo.play()
  botaoPlayPause.classList.remove("bi-play-circle-fill")
  botaoPlayPause.classList.add("bi-pause-circle-fill")
}
function pausarFaixa() {
  audioCapitulo.pause()
  botaoPlayPause.classList.add("bi-play-circle-fill")
  botaoPlayPause.classList.remove("bi-pause-circle-fill")
}

function tocarOuPausar() {
  if (taTocando === 0){
    pausarFaixa()
    taTocando = 1
  }else{
    tocarFaixa();
  }
}

botaoPlayPause.addEventListener('click', tocarOuPausar)