/* CONSEGNA:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età) */


/* chiedere nome tramite prompt
chiedere cognome tramite prompt
chiedere colore pref tramite prompt
chiedere età tramite prompt
stampa ritorno di ogni prompt uno di seguito all'altro in un elemento html */

const userName = prompt("Qual è il tuo nome?");
console.log(userName);

const userLastName = prompt("Qual è il tuo cognome?");
console.log(userLastName);

const favoriteColor = prompt("Qual è il tuo colore preferito?");
console.log(favoriteColor);

const age = prompt("Quanti anni hai?");
console.log(age);

const result = `
${userName}${userLastName}${favoriteColor}${age}
`;
console.log(result);

const elemento = document.getElementById("password");

elemento.innerHTML = result; 

// PROVE EXTRA

const saluto = `
Benvenuto/a ${userName} ${userLastName}!
`;
console.log(saluto);

const h1 = document.getElementById("saluto");
h1.innerText = saluto;

const colore = `
Il tuo colore preferito è ${favoriteColor}.
`;
console.log(colore);

const pColore = document.getElementById("colore");
pColore.innerText = colore;

let etaFutura = Number(age) + 10;

const etaFuturaFrase = `
Tra dieci anni ne avrai ${etaFutura}.
`;
console.log(etaFuturaFrase);

const pEtaFutura = document.getElementById("eta-futura");
pEtaFutura.innerText = etaFuturaFrase;
