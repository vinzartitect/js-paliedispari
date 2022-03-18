// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let tocco = prompt(`Scegli: Pari o Dispari?`);

let numeroUtente = parseInt(prompt(`inserisci un numero da 1 a 5!`));

function numeroRandom(min, max) {
    let numeroPC = (Math.floor(Math.random() * max) + min );
    return numeroPc;
}

let numeroPc = (1,5);

let somma = ( numeroUtente + numeroRandom(min, max) );

