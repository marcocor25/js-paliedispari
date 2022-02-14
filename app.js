// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA DA VERIFICARE
const inputParola = prompt('Inserisci una parola.').toLowerCase();

// CREO LA FUNZIONE DI VERIFICA DELLA PAROLA
function parolaPalindroma (parola) {
    const scomponiParola = [...parola];
    console.log(scomponiParola);

    const scomponiParolaReverse = scomponiParola.reverse();
    console.log(scomponiParolaReverse);

    const scomponiParolaJoin = scomponiParolaReverse.join('');
    console.log(scomponiParolaJoin);

    if (scomponiParolaJoin === parola) {
        alert('La parola è palindroma!');
    } else {
        alert('La parola non è palindroma!');
    }
}

// CHIAMO LA FUNZIONE
parolaPalindroma(inputParola);