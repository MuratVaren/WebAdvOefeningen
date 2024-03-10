let maandenArray = ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","October","November","December"];
let dagenInMaandArray = [31,29,31,30,31,30,31,31,30,31,30,31];
let zin = "";
for(let i = 0;i < maandenArray.length; i++){
    for(let j = 1; j <= dagenInMaandArray[i];j++){
        zin += `${j.toString().padStart(2,'0')} ${maandenArray[i]} 2024\n`;
    }
    zin += "\n";
}
document.getElementById("zin").innerText = zin;