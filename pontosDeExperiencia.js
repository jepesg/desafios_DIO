function calcXp(num1, num2) {
    let xpGanho = num1 * num2 * 100;
    return "Voce ganhou " + xpGanho + " XP!";
}

let num1 = parseInt(gets());
let num2 = parseInt(gets());

console.log(calcXp(num1, num2));