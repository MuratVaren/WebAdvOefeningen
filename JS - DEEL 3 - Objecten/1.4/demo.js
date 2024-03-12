let persoonObject = {
    naam : "Murat",
    leeftijd: 21,
    geboorteDatum: new Date("02/09/2001"),
    email: "bob@gmail.com",
    telefoonNummer: "0486589142",
    land: "Belgie",
    huidskleur: "Melk",
    oogkleur: "rood"
};
let array = Object.entries(persoonObject);
console.log(array);

console.log(`${array[0][0]}: ${array[0][1]}`)