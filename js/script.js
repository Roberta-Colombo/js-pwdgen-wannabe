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