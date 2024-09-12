class itemMagico {
    constructor(itemTipo, itemDano, itemResistencia) {
        this.tipo = itemTipo
        this.dano = itemDano
        this.resistencia = itemResistencia
    }

    calcularDano() {
        if (this.tipo == "arco") {
            danoTotal = this.dano * 2;
            return this.tipo == "arco" ? this.dano * 2 : this.dano;
        } else if (this.tipo == "cajado") {
            danoTotal = this.dano * 2;
            return this.tipo == "cajado" ? this.dano * 2 : this.dano;
        } else if (this.tipo == "espada") {
            danoTotal = this.dano * 2;
            return this.tipo == "espada" ? this.dano * 2 : this.dano;
        }
    }
}

let itemTipo = new itemMagico(gets());
let danoItem = new itemMagico(parseInt(gets()));
let itemResistencia = new itemMagico(parseInt(gets()));

console.log(`Tipo: ${itemMagico.itemTipo}`);
console.log(`Dano: ${itemMagico.itemDano}`);
console.log(`Resistencia: ${itemMagico.itemResistencia}`);

const danoTotal = itemMagico.calcularDano();
console.log(`Dano em combate: ${danoTotal}`);