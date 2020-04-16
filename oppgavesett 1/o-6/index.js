const forrett = prompt ("Hva vil du ha til forrett?")
const hovedrett = prompt ("Hva vil du ha som hovedrett?")
const dessert = prompt ("Hva vil du ha til dessert?")

document.write(`
<div> 
<h3> Hei, her er din skreddersydde meny </3>
<ul>
    <li> ${forrett} </li>
    <li> ${hovedrett} </li>
    <li> ${dessert} </li>
</ul>
`); 

// // Dette er en variabel, Denne kan endres 
// let poeng = 0;

// // Endre
// Poeng = 100; //poeng skal bli hundre

// // Hvordan kan jeg få 50 poeng?
// poeng = poeng + 50; 
// //Dette har en kortform av dette
// poeng =+ 50;
// //øke med 1
// Poeng++;



// let navn = "Sverre"
// navn = navn + "Olsen"
// console.log(navn)