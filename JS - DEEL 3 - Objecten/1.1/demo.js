let persoonObject = {
    naam : "Murat",
    leeftijd: 21,
    email: "bob@gmail.com",
    land: "Belgie"
};
let zin = "";
for(var key in persoonObject){
    zin += `${key.charAt(0).toUpperCase()}${key.substring(1)}: ${persoonObject[key]}\n`
}
document.getElementById("zin").innerText = zin;