let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let pontosOponente = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
	if(keyIsDown(UP_ARROW)){
		yAtor-=3;
	}

	if(keyIsDown(DOWN_ARROW)){
		if(movimentacaoAtor()){
			yAtor+=3;
		}
	}
}

function movimentacaoAtor(){
	return yAtor < 366;
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function verificaColisao(){
	for(let i = 0; i < imagemCarros.length; i++){
		colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
		if (colisao){
      retornaPosicaoInicial();
			somColisao.play();
    if(pontosMaiorQueZero()){
    	meusPontos -= 1;
    	}
    }
  }
}

function retornaPosicaoInicial(){
	yAtor = 366;
}

function incluiPontos(){
	textAlign(CENTER);
	fill(255, 69, 0);
	textSize(25)
	text(meusPontos, width / 5, 27)
}

function marcaPonto(){
	if(yAtor < 15){
		meusPontos++;
		somPonto.play();
		retornaPosicaoInicial();
	}
}

function pontosMaiorQueZero(){
	return meusPontos > 0;
}