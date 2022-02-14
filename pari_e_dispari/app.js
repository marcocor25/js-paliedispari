// CHIEDO ALL'UTENTE SE SCEGLIERE PARI O DISPARI
const domanda = prompt('Scegli, pari o dispari?').toLowerCase();
console.log(domanda);

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUEMRO
const scegliNumero = parseInt(prompt('Scegli un numero da 1 a 5.'));
console.log(scegliNumero);

// FUNZIONE PER GENERARE NUMERI
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// GENERATORE NUMERO CASUALE COMPUTER
const computerNumber = numeroRandom(1, 5);
console.log(computerNumber);

// FUNZIONE PER SOMMARE I DUE NUMERI
function somma (utente, computer) {
  const somma = utente + computer;
  return somma;
}

// VARIABILE PER IL RISULTATO DELLA SOMMA
const totale = somma(scegliNumero, computerNumber);
console.log(totale);

// ISTRUZIONI PER STABILIRE CHI HA VINTO
if (domanda === 'pari' && totale % 2 == 0) {
    alert(`È uscito ${totale}, hai vinto!`);
} else if (domanda === 'dispari' && totale % 2 !== 0) {
    alert(`È uscito ${totale}, hai vinto!`);
} else {
    alert(`È uscito ${totale}, hai perso...`);
}