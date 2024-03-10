let tijd = new Date();
let uren = tijd.getHours();
let zin;

switch(true) {
    case (uren >= 7 && uren < 12):
        zin = `Goedenmorgen het is ${tijd.toLocaleString("nl-be")}`;
        break;
    case (uren >= 12 && uren < 18):
        zin = `Goede dag het is ${tijd.toLocaleString("nl-be")}`;
        break;
    default:
        zin = `Goede avond het is ${tijd.toLocaleString("nl-be")}`;
        break;
}

document.getElementById("tijd").innerText = zin;
