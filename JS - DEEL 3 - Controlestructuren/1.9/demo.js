let getal;
while(isNaN(getal) || getal < 1 || getal > 10){
    getal = parseInt(prompt("geef een getal tussen 1 en 10"));
}
let zin = "";
for(let i = 1; i <= 10; i++){
    zin += `${getal} * ${i} = ${getal*i}\n`;
}
document.getElementById("antwoord").innerText = zin;