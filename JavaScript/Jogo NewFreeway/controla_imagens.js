//Imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarroDois;
let imagemCarroTres;
let imagemCarroQuatro;
let imagemCarroCinco;
let imagemCarroSeis;

let somTrilhaSonora;
let somColisao;
let somPonto;

function preload(){
	imagemEstrada = loadImage("./images/estrada.png");
	imagemAtor = loadImage("./images/ator-1.png");
	imagemCarro = loadImage("./images/carro-1.png");
	imagemCarroDois = loadImage("./images/carro-2.png");
	imagemCarroTres = loadImage("./images/carro-3.png");
	imagemCarroQuatro = loadImage("./images/carro-2.png");
	imagemCarroCinco = loadImage("./images/carro-3.png");
	imagemCarroSeis = loadImage("./images/carro-1.png");
	imagemCarros = [imagemCarro, imagemCarroDois, imagemCarroTres, imagemCarroQuatro, imagemCarroCinco, imagemCarroSeis];

	somTrilhaSonora = loadSound("./sons/trilha.mp3");
	somColisao = loadSound("./sons/colidiu.mp3");
	somPonto = loadSound("./sons/pontos.wav");
}