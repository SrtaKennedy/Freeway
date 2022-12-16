/*Código do Carro*/

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 97, 150, 210, 262, 318];
let velocidadeCarros = [6, 4, 8, 7, 4.5, 4];
let comprimentoCarro = 80;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 800;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -80;
}















