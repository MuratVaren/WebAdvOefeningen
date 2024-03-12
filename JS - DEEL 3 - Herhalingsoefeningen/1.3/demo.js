let klanten = [ {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'}, {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'}, {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'}, {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'}, {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}, ];

const stadAanpasser = () => {
    klanten.forEach((klant, index) => {
        let newStad = 'Antwerpen';
        for (let i = 0; i < index; i++) {
            newStad += '-Antwerpen';
        }
        klant.stad = newStad;
    });

    console.log(klanten);
}

stadAanpasser();
