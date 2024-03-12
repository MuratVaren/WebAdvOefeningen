let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
];

const objectGenerator = () => {
    klanten.forEach(klant => {
        let p = document.createElement("p");
        p.innerText = `Voornaam: ${klant.voornaam}, Naam: ${klant.naam}, Stad: ${klant.stad}`
        document.body.append(p)
    })

}
objectGenerator();