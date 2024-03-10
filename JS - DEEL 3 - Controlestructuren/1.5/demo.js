let getal;
while(isNaN(getal) || getal !== 50){
    getal = parseInt(prompt("Geef een getal in"));
    if(isNaN(getal)){
        alert("Niet een geldig getal")
    }
    else if(getal === 50){
        alert("Goed geraden")
    }
    else if(getal < 50){
        alert("Te laag")
    }
    else if(getal > 50){
        alert("Te hoog");
    }
}