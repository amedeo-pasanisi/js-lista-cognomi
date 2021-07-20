// 1. chiedi all’utente il cognome
var cognome;

function startsWithCapital(cognome){
    return word.charAt(0) === cognome.charAt(0).toUpperCase()
}

do {
    cognome = prompt("inserisci il tuo cognome con la prima lettera maiuscola");
} while (startsWithCapital(cognome) != true)

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log("lista iniziale: " + lista);

lista.push(cognome);
console.log("lista aggiornata: " + lista);

// 3. stampa la lista ordinata alfabeticamente
lista.sort();

console.log("lista ordinata alfabeticamente:");
for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

console.log("lista ordinata alfabeticamente e numerata:");
for (var i = 0; i < lista.length; i++) {
    console.log((i + 1) + " " + lista[i]);
}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log("posizione nella lista dell' ultimo cognome aggiunto: " + (lista.indexOf(cognome) + 1));