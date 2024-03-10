const grootstGetal = () => {
    if(getallenArray.length === 0){
        return null;
    }
    let hoogsteGetal = 0;
    for(let i = 0; i < getallenArray.length; i++){
        if(getallenArray[i] > hoogsteGetal){
            hoogsteGetal = getallenArray[i];
        }
    }
    return hoogsteGetal;
}
let getallenArray = [];
let zin = "";
let getal;
while(zin.toLowerCase() !== "stop" || getallenArray.length === 0){
    zin = prompt("geef een getal in, of type in stop om het hoogst getal te zien");
    getal = parseInt(zin);
    if(!isNaN(getal)){
        getallenArray.push(getal);
    }
}
alert("grootste getal is: " + grootstGetal());