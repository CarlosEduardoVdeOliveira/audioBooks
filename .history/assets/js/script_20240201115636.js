const capitulo = document.querySelector("#capitulo");
const audioCapitulo = document.querySelector("#audio-capitulo");
const botaoPlayPause = document.querySelector("#play-pause");
const botaoAnterior = document.querySelector("#anterior");
const botaoProximo = document.querySelector("#proximo");
const numerocapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
}

function tocarOuPausar() {
  if (taTocando === 0){
    tocarFaixa();
    taTocando = 1;
  }else{
    pausarFaixa();
    taTocando = 0;
  }
}
function nomeDoCapitulo() {
  capitulo.innerText = `Capítulo ${capituloAtual}`;
}
function proximoFaixa(){
  if (capituloAtual === numerocapitulos) {
    capituloAtual = 1;
  }else{
    capituloAtual++;
  }
  audioCapitulo.src = `./assets/books/dom-casmurro/${capituloAtual}.mp3`;
  nomeDoCapitulo();
  tocarFaixa();
  taTocando = 1;
}

function fixaAnterior(){
  if (capituloAtual === 1) {
    capituloAtual = numerocapitulos;
  }else{
    capituloAtual--;
  }

  audioCapitulo.src = `./assets/books/dom-casmurro/${capituloAtual}.mp3`;
  nomeDoCapitulo();
  tocarFaixa();
  taTocando = 1;
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximoFaixa);
botaoAnterior.addEventListener('click', fixaAnterior);