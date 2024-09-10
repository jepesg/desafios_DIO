let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido = parseInt(gets());


function escolhaTreinador(escolhaDoTreinador, pokemonEscolhido) {
    if (escolhaDoTreinador == 1) {
        pokemonEscolhido = "Bulbasaur";
        return ("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
    } else if (escolhaDoTreinador == 2) {
        pokemonEscolhido = "Charmander";
        return ("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
    } else if (escolhaDoTreinador == 4) {
        pokemonEscolhido = "Pikachu";
        return ("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
    } else if (escolhaDoTreinador == 5) {
        pokemonEscolhido = "Mewtwo";
        return ("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
    };
}
console.log(escolhaTreinador(escolhaDoTreinador, pokemonEscolhido))