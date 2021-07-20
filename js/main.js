// 1. chiedi all’utente il cognome
var cognome = prompt("inserisci il tuo cognome");

// do {
// } while ();

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log("lista iniziale: " + lista);

lista.push(cognome.charAt(0).toUpperCase() + cognome.slice(1));
console.log("lista aggiornata: " + lista);

// 3. stampa la lista ordinata alfabeticamente
lista.sort();

for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova