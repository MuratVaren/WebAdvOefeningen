let klanten = [ {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'}, {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'}, {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'}, {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'}, {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}, ];

const letterTeller = () => {
klanten.forEach(klant => console.log(`Aantal letters in familienaam van ${klant.voornaam} is ${klant.naam.length}`))
}
letterTeller();