// console.log("Ciao");


// Esercizio 1: Calcola la media dei primi 10 numeri


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somNumber = number[0];

for (i = 1; i < number.length; i++) {
    somNumber = somNumber + number[i];

}

let mediaNumber = somNumber / number.length;
console.log(mediaNumber);
