class itemMagico {
    constructor(itemTipo, itemDano, itemResistencia) {
        this.tipo = itemTipo
        this.dano = itemDano
        this.resistencia = itemResistencia
    }

    calcularDano() {
        if (this.tipo === "arco" || this.tipo === "cajado" || this.tipo === "espada") {
            return this.dano * 2;
        }
        return this.dano;
    }
}

const itemTipo = (gets());
const itemDano = parseInt(gets());
const itemResistencia = parseInt(gets());

const item = new itemMagico(itemTipo, itemDano, itemResistencia);

console.log(`Tipo: ${itemTipo}`);
console.log(`Dano: ${itemDano}`);
console.log(`Resistência: ${itemResistencia}`);

const danoTotal = item.calcularDano();
console.log(`Dano em combate: ${danoTotal}`);