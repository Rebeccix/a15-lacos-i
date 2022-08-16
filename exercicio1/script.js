let question = prompt("Quer uma coxinha?").toUpperCase().slice(0, 1);
let coxinha = 2.50;
let conta = 0;

while ( question === "S" ) {
    conta += coxinha
    question = prompt("Quer mais uma coxinha?").toUpperCase().slice(0, 1)
}

console.log(conta)

// Perguntar ------------------------------------------------

// let question = prompt("Quer uma coxinha?").toUpperCase().slice(0, 1);
// let coxinha = 0;

// while ( question === "S" ) {
//     let conta = coxinha + 2.50;
//     question = prompt("Quer mais uma coxinha?").toUpperCase().slice(0, 1)
// }

// console.log(conta)