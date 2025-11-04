// Scrivi una funzione contaMaggiori(array, limite) che restituisce quanti numeri nell’array sono maggiori del valore limite.

// const numeri = [2, 8, 5, 12, 7, 1];
// console.log(contaMaggiori(numeri, 6)); // 3



//FUNCTION
function contaMaggiori(number, n1) {
    let numberMAx = [];
    for (i = 0; i < number.length; i++) {
        let curNumber = number[i];
        if (curNumber > n1) {
            numberMAx.push(curNumber);
        }
    }
    return numberMAx.length;
}




//dichiaro e assegno un array contenente i numeri
const numeri = [2, 8, 5, 12, 7, 1, 9, 13, 1];

let result = contaMaggiori(numeri, 6);
console.log(result);
