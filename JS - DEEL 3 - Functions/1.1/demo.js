/**
 * Multiplies two numbers.
 * @param {number} getal1 - De eerste getal.
 * @param {number} getal2 - De tweede getal.
 * @returns {number} De vermenigvuldiging van de twee getallen.
 */
const vermenigvuldig = (getal1, getal2) => {
    if(!isNaN(getal1) && !isNaN(getal2)){
        return getal1 * getal2;
    }
    else{
        alert("geef twee geldige getallen in");
    }
}
let getal1 = parseInt(prompt("geef uw eerste getal"));
let getal2 = parseInt(prompt("geef uw tweede getal"));
document.getElementById('result').innerText = `${vermenigvuldig(getal1,getal2)}`;

