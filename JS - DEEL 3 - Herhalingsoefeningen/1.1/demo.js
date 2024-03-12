let klanten = [ {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'}, {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'}, {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'}, {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'}, {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}, ];
const arrayFilter = () => {
    let filter = klanten.filter(x => x.stad === "Genk");
    return filter;
}
console.log(arrayFilter());