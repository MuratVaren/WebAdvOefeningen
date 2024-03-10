let array = ["digital","programeren","web-design","doktor"];
array.push("Bachelor1","Bachelor2","Bachelor3");
let zin = array.join(`\n`)
document.getElementById('zin').innerText = zin;