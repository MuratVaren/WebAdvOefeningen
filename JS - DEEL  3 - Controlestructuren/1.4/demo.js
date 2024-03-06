let tijd = new Date();
let zin;
if(tijd >= 7 && tijd < 12){
    zin = `Goedenmorgen het is ${tijd.toLocaleString("nl-be")}`
}
else if(tijd >= 12 && tijd < 18){
    zin = `Goede dag het is ${tijd.toLocaleString("nl-be")}`
}
else{
    zin = `Goede avond het is ${tijd.toLocaleString("nl-be")}`
}
document.getElementById("tijd").innerText = zin;