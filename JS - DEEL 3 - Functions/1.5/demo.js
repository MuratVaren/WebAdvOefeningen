const zinSplitsen = (zin, getal) => {
    let zin1 = zin.substring(0,getal);
    let zin2 = zin.substring(getal)
    alert(`Deel 1 = ${zin1}, Deel 2 = ${zin2}`)
}
let zin = "";
let getal;
while (zin === ""){
    zin = prompt("Geef een zin:");
}
while (isNaN(getal) || getal < 0 || getal > zin.length) {
    getal = parseInt(prompt(`Geef een getal tussen 0 en ${zin.length}`));
}
zinSplitsen(zin,getal);