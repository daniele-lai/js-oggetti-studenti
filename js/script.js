/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

//1. Creare un oggetto che descriva uno studente con: nome, cognome e età
var studente = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 17
}

//2. Stampare attraverso un ciclo for-in le proprietà dell'oggetto
for (var key in studente) {
  document.getElementById('features').innerHTML += (key + ": " + studente[key] + "; ");
}

//3. Creare un array di oggetti di studenti
var studenti = [
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: 17
  },
  {
    nome: "Davide",
    cognome: "Bianchi",
    eta: 18
  },
  {
    nome: "Francesco",
    cognome: "Verdi",
    eta: 17
  },
  {
    nome: "Bruno",
    cognome: "Melanzana",
    eta: 43
  }
];

//4. Ciclare su tutti gli studenti e stampare nome e cognome
for (var i = 0; i < studenti.length; i++) {
  document.getElementById('list').innerHTML += (studenti[i]["nome"] + " " + studenti[i]["cognome"] + " ");
}


/*5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/
var nomeStudente = prompt("Inserisci il nome del nuovo studente");
var cognomeStudente = prompt("Ora inserisci il cognome");
var etaStudente = parseInt(prompt("Quanti anni ha?"));

var nuovoStudente = {};
nuovoStudente.nome = nomeStudente;
nuovoStudente.cognome = cognomeStudente;
nuovoStudente.eta = etaStudente;

studenti.push(nuovoStudente);

for (var i = 0; i < studenti.length; i++) {
  document.getElementById('new_list').innerHTML += (studenti[i]["nome"] + " " + studenti[i]["cognome"] + " ");
}
