/*Imagens e Sons do Jogo*/

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-2.png");
  imagemCarro = loadImage("imagens/carro5.png");
  imagemCarro2 = loadImage("imagens/carro11.png");
  imagemCarro3 = loadImage("imagens/carro4.png");
  imagemCarro4 = loadImage("imagens/carro1.png");
  imagemCarro5 = loadImage("imagens/carro2.png");
  imagemCarro6 = loadImage("imagens/carro3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}