
let fleteGjithsej = 157;
let fletePerStudent = 6;


let grupet = parseInt(fleteGjithsej / fletePerStudent);


let mbetja = fleteGjithsej % fletePerStudent;

let kontrolli = (grupet * 6) + mbetja;

console.log("Numri i grupeve të plota: " + grupet);
console.log("Fletët e mbetura: " + mbetja);
console.log("Kontrollimi i llogaritjes: " + kontrolli);
