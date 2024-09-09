function simularJornada(posicaoInicial, numeroDePassos){
    let resultado = posicaoInicial + numeroDePassos;
    return ("Posicao final do heroi: " + resultado);
  }
  
  let posicaoInicial = parseInt(gets());
  let numeroDePassos = parseInt(gets());
  
  console.log(simularJornada(posicaoInicial, numeroDePassos));