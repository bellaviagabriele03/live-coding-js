



// Genera per 6 volte un numero random,
// se è dispari inseriscilo nell’array.

const numberDisp = [];

let random = 0;


for (i = 1; i <= 6; i++) {
    random = Math.floor(Math.random() * 100)

    if (random % 2 !== 0) {
        numberDisp.push(random)
    }

}
console.log(numberDisp);

