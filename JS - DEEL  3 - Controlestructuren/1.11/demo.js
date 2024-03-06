let getal;
while(isNaN(getal) || getal < 0 || getal > 10){
    getal = parseInt(prompt("geef een getal tussen 1 en 10"));
}
let char = "#";
for(let i = 1;i <= getal;i++){
    console.log(`${char.repeat(i)}`)
}
