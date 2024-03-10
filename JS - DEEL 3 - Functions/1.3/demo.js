const isVijftig = (getal1, getal2) => {
    if(!isNaN(getal1) && !isNaN(getal2)){
        if(getal1 === 50 || getal2 === 50 || (getal1 + getal2) === 50){
            return "Hoera VIJFTIG";
        }
        else{
            return "NIET VIJFTIG WAAT";
        }
    }
}
let getal1 = parseInt(prompt("Geef de eerste getal"));
let getal2 = parseInt(prompt("Geef de tweede getal"));
document.getElementById("result").innerText = isVijftig(getal1,getal2);