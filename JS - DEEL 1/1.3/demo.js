let getal ;
while(true){
    getal = parseInt(prompt("Geef een getal tussen 1 en 5"));
    if(!isNaN(getal) && getal >= 1 && getal <= 5){
        break;
    }
    else{
        alert("Dat is geen geldig getal tussen 1 en 5. Probeer opniew");
    }
}
console.log(getal);