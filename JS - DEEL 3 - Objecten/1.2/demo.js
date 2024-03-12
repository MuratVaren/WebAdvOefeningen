let persoonObject = {
    naam : "Murat",
    leeftijd: 21,
    geboorteDatum: new Date("02/09/2001"),
    email: "bob@gmail.com",
    telefoonNummer: "0486589142",
    land: "Belgie",
    description: function (){
        return `Mijn naam is ${this.naam} en ik ben geboren op ${this.geboorteDatum.toLocaleDateString("nl-nl")}. Mijn telefoonnummer is ${this.telefoonNummer} en mijn email is ${this.email}.`;
    }
};
document.getElementById("zin").innerText = persoonObject.description();