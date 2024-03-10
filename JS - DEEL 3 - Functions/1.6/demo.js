const zinSplitsen = (zin, getal) => {
    let zin1 = zin.substring(0,getal);
    let zin2 = zin.substring(getal)
    console.log(`Deel 1 = ${zin1}, Deel 2 = ${zin2}`)
}

const verwijderTeken = (zin, getal) => {
    if (isNaN(getal) || getal < 0 || getal >= zin.length) {
        console.error(`Ongeldig getal. Het getal moet tussen 0 en ${zin.length - 1} liggen.`);
        return;
    }
    let zinZonderTeken = zin.slice(0, getal) + zin.slice(getal + 1);
    console.log(`Zin zonder teken op positie ${getal}: ${zinZonderTeken}`);
}

let zin = "";
let getal;
while (zin === ""){
    zin = prompt("Geef een zin:");
}
while (isNaN(getal) || getal < 0 || getal > zin.length) {
    getal = parseInt(prompt(`Geef een getal tussen 0 en ${zin.length - 1}`));
}

zinSplitsen(zin, getal);
verwijderTeken(zin, getal);
