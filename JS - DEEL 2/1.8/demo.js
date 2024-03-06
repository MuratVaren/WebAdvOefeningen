let getal1;
let getal2;
while(isNaN(getal1)){
    getal1 = parseInt(prompt("voer het eerste getal in"));
}
while(isNaN(getal2)){
    getal2 = parseInt(prompt("voer het tweede getal in"));
}
document.getElementById('resultaat').innerText =
    `${getal1} + ${getal2} = ${getal1 + getal2}\n
    ${getal1} - ${getal2} = ${getal1 - getal2}\n
    ${getal1} * ${getal2} = ${getal1 * getal2}\n
    ${getal1} / ${getal2} = ${getal1 / getal2}\n`