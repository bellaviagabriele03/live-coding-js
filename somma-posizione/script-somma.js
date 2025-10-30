// console.log("ciao");


// Crea un array di 10 numeri interi e fai la somma di tutti gli elementi 
// che sono pari in posizione(indice) dispari


// //               0  1   2   3  4   5  6   7   8  9
// const numberA = [1, 24, 35, 6, 70, 2, 4, 60, 80, 3,];


// let random = 0;
// for (i = 0; i < 10; i++) {
//     random = Math.floor(Math.random() * 100)
//     numberA.push(random)
// }


// 24, 6, 60, 2




const numberA = [1, 24, 35, 6, 70, 2, 4, 60, 80, 3,];

let somma = 0;

for (i = 0; i < numberA.length; i++) {
    let curNumber = numberA[i];
    if (curNumber % 2 === 0 && i % 2 !== 0) {
        somma = somma + curNumber;
        
        
    }


}

console.log(somma);

