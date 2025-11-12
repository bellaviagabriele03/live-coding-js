// Scrivi una funzione contaMaggiori(array, limite) che restituisce quanti numeri nell’array sono maggiori del valore limite.

// const numeri = [2, 8, 5, 12, 7, 1];
// console.log(contaMaggiori(numeri, 6)); // 3

//EX 1:

//FUNCTION
// function contaMaggiori(number, n1) {
//     let numberMAx = [];
//     for (i = 0; i < number.length; i++) {
//         let curNumber = number[i];
//         if (curNumber > n1) {
//             numberMAx.push(curNumber);
//         }
//     }
//     return numberMAx.length;
// }




//dichiaro e assegno un array contenente i numeri



// const numeri = [2, 8, 5, 12, 7, 1, 9, 13, 1];

// let result = contaMaggiori(numeri, 6);
// console.log(result);


//ES 2:


// Scrivi una funzione raddoppia(array) che restituisce un nuovo array in cui ogni numero è il doppio dell’originale.

// const valori = [1, 3, 5, 10];
// console.log(raddoppia(valori)); // [2, 6, 10, 20]



// function raddoppia(number) {
//     let numberBang = [];
//     for (let i = 0; i < number.length; i++) {
//         let curNumber = number[i];
//         numberBang.push(curNumber + curNumber)

//     }
//     return numberBang;
// }





// const valori = [1, 3, 5, 10];

// let result = raddoppia(valori);
// console.log(result);





//EX 3


// Scrivi una funzione concatena(array, simbolo) che unisce in un’unica stringa tutte le parole mettendo il simbolo tra di loro.

// const parole = ["ape", "miele", "olio", "uovo", "pane", "sole"];
// console.log(concatena(parole, "-")); //


function concatena(word, simbolo) {
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        let curWord = "";
        curWord = word[i] + simbolo;
        newWord.push(curWord);
    }
    return newWord;
}








const parole = ["ape", "miele", "olio", "uovo", "pane", "sole"];
let result = concatena(parole, "-");
console.log(result);
