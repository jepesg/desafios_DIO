const quantidadeGolpes = parseInt(gets());
//let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];
let minerais = ["Pedra", "Carvao", "Ferro", "Diamante"];

for(let contadorDeGolpes = 1; contadorDeGolpes <= quantidadeGolpes; contadorDeGolpes ++){
    let mina = contadorDeGolpes % minerais.length;
    console.log(contadorDeGolpes + ": " + minerais[mina]);
}