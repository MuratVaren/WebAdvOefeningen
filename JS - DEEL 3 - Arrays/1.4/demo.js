let hondenArray = ["Hond1","Hond2","Hond3","Hond4","Hond5","Hond6","Hond7","Hond8","Hond9","Hond10"];
let getal;
while(isNaN(getal) || getal < 1 || getal > 10){
    getal = parseInt(prompt("Geef een getal tussen 1 en 10"));
    if(getal < 1 || getal > 10){
        alert("Geen katten toegelaten")
    }
    else if(isNaN(getal)){
        alert("geef een geldig getal in");
    }
}
alert(hondenArray[getal-1]);
