function setup() {
	somTrilhaSonora.loop();
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
	movimentaAtor();
	loopPosicaoInicialDoCarro();
	verificaColisao();
	incluiPontos();
	marcaPonto();
	
}