let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
];

const voornaamHerhaler = () => {
    // Maak een array aan om voornamen op te slaan
    let voornaamArray = [];
    // Itereer over de klanten array en voeg elke voornaam toe aan voornaamArray
    klanten.forEach(klant => voornaamArray.push(klant.voornaam))
    // Voeg alle voornamen samen tot één string
    let zin = voornaamArray.join('');
    // Controleer of de lengte van de string een even getal is
    if(zin.length % 2 !== 0){
        // Als de lengte oneven is, toon de string
        return console.log(zin);
    }
    else{
        // Als de lengte even is, zet de laatste voornaam in hoofdletters
        zin = "";
        for(let i = 0; i < voornaamArray.length; i++){
            if(i === voornaamArray.length - 1){
                zin += `${voornaamArray[i].toUpperCase()}`
            }
            else{
                zin += voornaamArray[i];
            }
        }
        // Toon de string in de console
        console.log(zin);
    }
}
// Roep de functie aan om de output in de console te tonen
voornaamHerhaler();
