
let produkti1 = 35;
let produkti2 = 24;
let sasia1 = 2;
let zbritja = 15;
let transporti = 4;


let cmimiParaZbritjes = (produkti1 * sasia1) + produkti2;


let shumaZbritjes = cmimiParaZbritjes * zbritja / 100;


let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;

let vleraPerfundimtare = cmimiPasZbritjes + transporti;

console.log("Çmimi para zbritjes: " + cmimiParaZbritjes + " €");
console.log("Shuma e zbritjes (15%): " + shumaZbritjes + " €");
console.log("Çmimi pas zbritjes: " + cmimiPasZbritjes + " €");
console.log("Transporti: " + transporti + " €");
console.log("Vlera përfundimtare: " + vleraPerfundimtare + " €");
