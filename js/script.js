
// 1) chiedo all'utente il numero di chilometri che vuole percorrere
// 2) chiedo all'utente l'età del passeggero
// 3) se l'età comprede 18-64 anni allora il prezzo é pieno: 0.21 € x chilomitri richiesti
// 4) se l'età è < 18 anni  é ridotto di 20% : ((0.21 € x chilomitri richiesti) / 100) x 80
// 5) se l'età è > 65 anni  é ridotto di 40% : ((0.21 € x chilomitri richiesti) / 100) x 60
// 6) stampo il prezzo finale con massimo due decimali, per indicare centesimi sul prezzo

var chilometri = parseInt(prompt("Quanto è lungo il tuo viaggio? Scrivi il totale di chilomitri che vuoi percorrere"));
console.log(chilometri);

var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

var price = chilometri * 0.21;
console.log(price);

if (eta > 18 && eta < 65) {
    document.getElementById("test").innerHTML = price;
}

if (eta < 18 ) {
    document.getElementById("test").innerHTML = price / 100 * 80;
}

if (eta > 65 ) {
    document.getElementById("test").innerHTML = price / 100 * 60;
}