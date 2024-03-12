let persoonObject = {
    naam : "Murat",
    leeftijd: 21,
    geboorteDatum: new Date("02/09/2001"),
    email: "bob@gmail.com",
    telefoonNummer: "0486589142",
    land: "Belgie",
    lengte: "15cm",
    gewicht: "9kg",
    huidskleur: "Melk",
    oogkleur: "rood"
};
for(var key in persoonObject){
    document.getElementById("zin").innerText += `${key}: ${persoonObject[key]}\n`
}
