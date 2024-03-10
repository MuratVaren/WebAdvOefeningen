let dagenInMaandArray = [31,29,31,30,31,30,31,31,30,31,30,31];
let dagNamen = ["Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag","Zondag"];
let zin = "";
let dagIndex = 0;
for(let i = 0; i < dagenInMaandArray.length; i++){
    for(let j = 1; j <= dagenInMaandArray[i]; j++){
        zin += `${dagNamen[dagIndex]}, ${j}/${dagenInMaandArray[i]}/2024\n`;
        dagIndex++;
        if(dagIndex === dagNamen.length){
            dagIndex = 0;
        }
    }
}
document.getElementById("zin").innerText = zin;