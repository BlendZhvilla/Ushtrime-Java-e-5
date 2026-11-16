
let pjesemarres = 45;
let pagesa = 12;

let salla = 180;
let materialet = 95;
let reklama = 60;

let teArdhurat = pjesemarres * pagesa;

let shpenzimetTotale = salla + materialet + reklama;

let diferenca = teArdhurat - shpenzimetTotale;

shpenzimetTotale += 25;

let diferencaRe = teArdhurat - shpenzimetTotale;

console.log("----- RAPORTI FINANCIAR -----");
console.log("Numri i pjesëmarrësve: " + pjesemarres);
console.log("Pagesa për person: " + pagesa + " €");
console.log("Të ardhurat totale: " + teArdhurat + " €");
console.log("-----------------------------");
console.log("Shpenzimet e sallës: " + salla + " €");
console.log("Shpenzimet e materialeve: " + materialet + " €");
console.log("Shpenzimet e reklamës: " + reklama + " €");
console.log("Shpenzimet totale: " + (shpenzimetTotale - 25) + " €");
console.log("Diferenca fillestare: " + diferenca + " €");
console.log("-----------------------------");
console.log("Shpenzime të paparashikuara: 25 €");
console.log("Shpenzimet e reja totale: " + shpenzimetTotale + " €");
console.log("Diferenca e re: " + diferencaRe + " €");
console.log("-----------------------------");
