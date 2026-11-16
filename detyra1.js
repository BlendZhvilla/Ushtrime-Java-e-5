const cmimiLibrit = 12.50;
const cmimiFletores = 1.50;

const sasiaLibrit = 5;
const sasiaFletores = 4;


let totaliLibrit = cmimiLibrit * sasiaLibrit;
let totaliFletoreve = cmimiFletores  * sasiaFletores;

let totali = totaliLibrit + totaliFletoreve;


totali += 2.50;


console.log("Fatura");
console.log("Totali i librave" , totaliLibrit);
console.log("Totali i Fletoreve" , totaliFletoreve);
console.log("Totali Komplet" , totali);

