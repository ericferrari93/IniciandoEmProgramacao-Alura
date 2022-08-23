let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 262, 318];
let comprimentoCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [5, 3.3, 7, 2.7, 4.5, 6];


function mostraCarro(){
	
	for(let i = 0; i < imagemCarros.length; i++){
  	image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
	
	}
}
function movimentaCarro(){
	for(let i = 0; i < imagemCarros.length; i++){
		 xCarros[i]-= velocidadeCarros[i];
	}
}

function loopPosicaoInicialDoCarro(){
	for(let i = 0; i < imagemCarros.length; i++){
		 if(limiteCarroTela(xCarros[i])){
			xCarros[i] = 600;
		 }
	}
}

function limiteCarroTela(xCarro){
	return xCarro < -50;
}